const Series = require('../models/Series');

const getAllSeries = () => Series
    .find({ is_avaible: true });
    // .populate({ path: 'episodes', model: 'episodes' });
const getSerieByProperties = props => Series.find( { ...props, is_avaible: true } );
const createOneSerie = data => Series.create( data );

module.exports = {
    getAllSeries,
    getSerieByProperties,
    createOneSerie
};