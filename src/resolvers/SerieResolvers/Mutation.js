const { createOneSerie, updateById, deleteById } = require('../../services/SerieService');
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

module.exports = {
    createSerie,
    updateSerie,
    deleteSerie,
};