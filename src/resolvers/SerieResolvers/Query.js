const { getAllSeries } = require( '../../services/SerieService' );

const getSeries = async () => {
    const series = await getAllSeries();
    return series;
};

module.exports = {
    getSeries
};