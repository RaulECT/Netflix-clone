const UserResolver = require( './UserResolvers' );
const MovieResolver = require( './MovieResolvers' );
const VideoResolver = require( './VideoResolvers' );
const SerieResolver = require( './SerieResolvers' );
const EpisodeResolver = require( './EpisodeResolvers' );

module.exports = {
    Video: {
        __resolveType( video ){
            if( video.duration ) { return 'Movie'; }
            if( video.episodes ) { return 'Serie'; }

            return null;
        }
    },
    Query: {
        ...UserResolver.Query,
        ...MovieResolver.Query,
        ...VideoResolver.Query,
        ...SerieResolver.Query,
        ...EpisodeResolver.Query,
    },
    Mutation: {
        ...UserResolver.Mutation,
        ...MovieResolver.Mutation,
        ...SerieResolver.Mutation,
        ...EpisodeResolver.Mutation,
    }
};