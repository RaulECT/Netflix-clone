const Movies = require('../models/Movies');

const getMovieById = _id => Movies
    .findById( { _id, is_avaible: true } )
    .populate( { path: 'liked_by', model: 'users' } );

const getAllMovies = () => Movies
    .find({ is_avaible: true })
    .populate( { path: 'liked_by', model: 'users' } );

const getMovieByProperties = props => Movies
    .find({ ...props, is_avaible: true })
    .populate( { path: 'liked_by', model: 'users' } );

const createOneMovie = data => Movies.create( data );

const updateById = ( _id, data ) => Movies
    .findByIdAndUpdate( { _id, is_avaible: true }, { ...data }, { new: true } )
    .populate( { path: 'liked_by', model: 'users' } );

const deleteById = _id => Movies
    .findByIdAndDelete( {_id} )
    .populate( { path: 'liked_by', model: 'users' } );

module.exports = {
    createOneMovie,
    getAllMovies,
    getMovieByProperties,
    updateById,
    deleteById,
    getMovieById,
};