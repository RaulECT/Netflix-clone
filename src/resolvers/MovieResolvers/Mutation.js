const { createOneMovie, updateById, deleteById, getMovieById } = require( '../../services/MovieService' );

const createMovie = async (_, { data }) => {
    const movie = await createOneMovie( data );
    return movie;
};

const updateMovie = async (_, { data, id }) => {
    const movie = await updateById( id, data );
    return movie;
};

const deleteMovie = async (_, { id }) => {
    const movie = await deleteById( id );
    return movie;
};

const rateMovie = async (_, { movie_id, user_id, rate }) => {
    const movie = await getMovieById( movie_id );
    const movieLikes = [...movie.liked_by];
    const isLikedByUserBefore = movieLikes.find( u => u === user_id );

    if ( isLikedByUserBefore ) {
        movieLikes.push( user_id );
    }

    const movieRate = (movie.rating + rate) / movieLikes.length;
    const movieUpdated = await updateById( movie_id, { liked_by: movieLikes, rating: movieRate } );

    return movieUpdated;
};

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    rateMovie,
};