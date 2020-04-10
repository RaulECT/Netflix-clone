const { createOneSerie, updateById, deleteById, getOneSerieById } = require('../../services/SerieService');
const { deleteCollectionByIds } = require( '../../services/EpisodeService' );

const createSerie = async (_, { data }) => {
    const serie = await createOneSerie( data );
    return serie;
};

const updateSerie = async (_, { data, id }) => {
    const serie = await updateById( id, data );
    console.log(serie);
    return serie;
};

const deleteSerie = async (_, { id }) => {
    const serie = await deleteById( id );
    await deleteCollectionByIds( serie.episodes );
    return serie;
};

const rateSerie = async (_, { serie_id, user_id, rate }) => {
    const serie = await getOneSerieById( serie_id );
    const serieLikes = [...serie.liked_by, user_id];
    const serieRate = (serie.rating + rate) / serieLikes.length;
    const serieUpdated = await updateById( serie_id, { liked_by: serieLikes, rating: serieRate } );

    return serieUpdated;
};

module.exports = {
    createSerie,
    updateSerie,
    deleteSerie,
    rateSerie,
};