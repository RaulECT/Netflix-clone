const { getOneUserById } = require( '../../services/UserService' );

const getUserById = async (_, {id}) => {
    const user = await getOneUserById( id );
    return user;
};

const getUserFavoritesMovies = async (_, {id}) => {
    const user = await getOneUserById( id );
    return user.movies;
};

const getUserFavoritesSeries = async (_, {id}) => {
    const user = await getOneUserById( id );
    return user.series;
};

module.exports = {
    getUserById,
    getUserFavoritesMovies,
    getUserFavoritesSeries,
};