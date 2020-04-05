const { getMovieByProperties, getAllMovies } = require('../../services/MovieService');
const { getSerieByProperties, getAllSeries } = require( '../../services/SerieService' );

const getByName = async (_, {name}) => {
    const movies = await getMovieByProperties({ name: { $regex: name, $options: 'i' } });
    const series = await getSerieByProperties({ name: { $regex: name, $options: 'i' } });

    return [ ...movies, ...series ];
};

const getByCategory = async(_, {category}) => {
    const movies = await getMovieByProperties({ category: { $regex: category, $options: 'i' } });
    const series = await getSerieByProperties({ category: { $regex: category, $options: 'i' } });
    
    return [ ...movies, ...series ];
};

const getVideos = async () => {
    const movies = await getAllMovies();
    const series = await getAllSeries();
    
    return [ ...movies, ...series ];
};

const getRecents = async () => {
    const movies = await getAllMovies().sort('date');
    const series = await getAllSeries().sort('date');

    return [ ...movies, ...series ];
};

const getBestRated = async () => {
    const movies = await getAllMovies().sort('rating');
    const series = await getAllSeries().sort('rating');
    
    return [ ...movies, ...series ];
};

module.exports = {
    getByName,
    getByCategory,
    getVideos,
    getRecents,
    getBestRated,
};