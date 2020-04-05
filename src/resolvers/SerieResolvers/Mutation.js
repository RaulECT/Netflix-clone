const { createOneSerie } = require('../../services/SerieService');

const createSerie = async (_, { data }) => {
    const serie = await createOneSerie( data );
    return serie;
};

module.exports = {
    createSerie
};