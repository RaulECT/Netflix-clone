const { getAllMovies, } = require( '../../services/MovieService' );

const getMovies = async () => {
    const movies = await getAllMovies();
    return movies;
};

module.exports = {
    getMovies
};