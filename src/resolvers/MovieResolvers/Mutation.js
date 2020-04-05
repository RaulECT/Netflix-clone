const { createOneMovie } = require( '../../services/MovieService' );

const createMovie = async (_, { data }) => {
    const movie = await createOneMovie( data );
    return movie;
};

module.exports = {
    createMovie
};