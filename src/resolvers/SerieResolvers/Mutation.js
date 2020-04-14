const { createOneSerie, updateById, deleteById, getOneSerieById } = require('../../services/SerieService');
const { deleteCollectionByIds } = require( '../../services/EpisodeService' );
const { uploadFile } = require( '../../utils/storage' );

const createSerie = async (_, { data }) => {
    const serieCover = await uploadFile( data.image_cover_uri );
    const serieTrailer = await uploadFile( data.trailer_uri );
    const serie = await createOneSerie( {
        ...data,
        image_cover_uri: serieCover,
        trailer_uri: serieTrailer
    } );
    return serie;
};

const updateSerie = async (_, { data, id }) => {
    const serieCover = await uploadFile( data.image_cover_uri );
    const serieTrailer = await uploadFile( data.trailer_uri );
    const serie = await updateById( id, {
        ...data,
        image_cover_uri: serieCover,
        trailer_uri: serieTrailer
    } );
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

const viewSerie = async (_, { id } ) => {
    const serie = await getOneSerieById( id );
    const views = serie.views + 1 ;
    const serieUpdated = await updateById( id, { views } );
    return serieUpdated;
};

module.exports = {
    createSerie,
    updateSerie,
    deleteSerie,
    rateSerie,
    viewSerie,
};