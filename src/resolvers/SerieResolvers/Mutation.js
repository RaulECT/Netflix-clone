const { createOneSerie, updateById } = require('../../services/SerieService');

const createSerie = async (_, { data }) => {
    const serie = await createOneSerie( data );
    return serie;
};

const updateSerie = async (_, { data, id }) => {
    const serie = await updateById( id, data );
    console.log(serie);
    return serie;
};

module.exports = {
    createSerie,
    updateSerie,
};