const Series = require('../models/Series');

const getAllSeries = () => Series
    .find({ is_avaible: true })
    .populate({ path: 'episodes', model: 'episodes' });

const getSerieByProperties = props => Series.find( { ...props, is_avaible: true } );

const createOneSerie = data => Series.create( data );

const updateById = ( _id, data ) => Series
    .findByIdAndUpdate( { _id, is_avaible: true }, { ...data }, { new: true } )
    .populate( { path: 'episodes', model: 'episodes' } );

const deleteById = _id => Series
    .findByIdAndDelete( { _id } )
    .populate( { path: 'episodes', model: 'episodes' } );

module.exports = {
    getAllSeries,
    getSerieByProperties,
    createOneSerie,
    updateById,
    deleteById,
};