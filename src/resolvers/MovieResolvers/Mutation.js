const { createOneMovie, updateById } = require( '../../services/MovieService' );

const createMovie = async (_, { data }) => {
    const movie = await createOneMovie( data );
    return movie;
};

const updateMovie = async (_, { data, id }) => {
    const movie = await updateById( id, data );
    return movie;
};

module.exports = {
    createMovie,
    updateMovie,
};