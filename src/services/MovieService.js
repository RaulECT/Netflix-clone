const Movies = require('../models/Movies');

const getAllMovies = () => Movies.find({ is_avaible: true });

const getMovieByProperties = props => Movies.find({ ...props, is_avaible: true });

const createOneMovie = data => Movies.create( data );

const updateById = ( _id, data ) => Movies.findByIdAndUpdate( { _id, is_avaible: true }, { ...data }, { new: true } );

const deleteById = _id => Movies.findByIdAndDelete( {_id} );

module.exports = {
    createOneMovie,
    getAllMovies,
    getMovieByProperties,
    updateById,
    deleteById,
};