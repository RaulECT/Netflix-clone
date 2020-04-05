const { getMovieByProperties, getAllMovies } = require('../../services/MovieService');

const getByName = async (_, {name}) => {
    const movies = await getMovieByProperties({ name: { $regex: name, $options: 'i' } });
    return movies;
};

const getByCategory = async(_, {category}) => {
    const movies = await getMovieByProperties({ category: { $regex: category, $options: 'i' } });
    return movies;
};

const getVideos = async () => {
    const movies = await getAllMovies();
    return movies;
};

const getRecents = async () => {
    const movies = await getAllMovies().sort('date');
    return movies;
};

const getBestRated = async () => {
    const movies = await getAllMovies().sort('rating');
    return movies;
};

module.exports = {
    getByName,
    getByCategory,
    getVideos,
    getRecents,
    getBestRated,
};