const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );
const md5 = require( 'md5' );

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    series: {
        type: [ Schema.Types.ObjectId ],
        ref: 'series'
    },
    movies: {
        type: [ Schema.Types.ObjectId ],
        ref: 'movies'
    },
    profile_img: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

UserSchema.pre( 'save', function( next ) {
    const user = this;

    user.profile_img = `http://gravatar.com/avatar/${md5( user.first_name )}?d=identicon`;
    next();
} );

UserSchema.pre( 'save', function( next ) {
    const user = this;
    const SALT_FACTOR = 13;

    if ( !user.isModified('password') ) { return next(); }

    bcrypt.genSalt( SALT_FACTOR, function( err, salt ){
        if( err ) return next( err );

        bcrypt.hash( user.password, salt, function( error, hash ) {
            if( error ) return next( error );

            user.password = hash;
            next();
        } );
    } );
} );

module.exports = mongoose.model( 'users', UserSchema );