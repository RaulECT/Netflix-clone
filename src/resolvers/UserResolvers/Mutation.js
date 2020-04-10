const { createOneUser, updateById, deleteById, getOneUserById } = require( '../../services/UserService' );

const createUser = async (_, { data }) => {
    const user = await createOneUser( data );
    return user;
};

const updateUser = async (_, { data, id }) => {
    const user = await updateById( id, data );
    return user;
};

const deleteUser = async (_, { id }) => {
    const user = await deleteById( id );
    return user;
};

const addMovieToFavorites = async (_, { movie_id, user_id } ) => {
    const user = await getOneUserById( user_id );
    const favoriteMovies = [ ...user.movies, movie_id];
    const userUpdated = await updateById( user_id, { movies: favoriteMovies } );

    return userUpdated;
};

const addSerieToFavorites = async (_, { serie_id, user_id } ) => {
    const user = await getOneUserById( user_id );
    const favoriteSeries = [ ...user.series, serie_id];
    const userUpdated = await updateById( user_id, { series: favoriteSeries } );

    return userUpdated;
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    addMovieToFavorites,
    addSerieToFavorites,
};