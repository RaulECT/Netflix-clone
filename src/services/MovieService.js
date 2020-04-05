const Movies = require('../models/Movies');

const getAllMovies = () => Movies.find({ is_avaible: true });
const getMovieByProperties = props => Movies.find({ ...props, is_avaible: true });
const createOneMovie = data => Movies.create( data );

module.exports = {
    createOneMovie,
    getAllMovies,
    getMovieByProperties
};