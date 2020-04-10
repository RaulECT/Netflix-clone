require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require( 'graphql-tools' );
const verifyToken = require( './src/utils/verifyToken' );
const AuthDirective = require( './src/resolvers/Directives/AuthResolver' );
const resolvers = require('./src/resolvers');

const mongoose = require('mongoose');

mongoose.connect( process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
} );

const mongo = mongoose.connection;

mongo.on( 'error', error => console.log( error ) )
    .once( 'open', () => console.log( 'DataBase connected! 🔥' ) );

const typeDefs = importSchema( __dirname + '/shema.graphql' );
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: AuthDirective
    }
});

const server = new GraphQLServer( {
    schema,
    context: async contextParams => ({
        ...contextParams,
        userAuth: contextParams.request
            ? await verifyToken( contextParams.request )
            : {}
    })
} );

server.start( () => console.log( 'Server running on port 4000 🚀' ) );