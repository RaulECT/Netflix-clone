const { createOneEpisode, updateById, deleteById } = require( '../../services/EpisodeService' );

const createEpisode = async (_, { data }) => {
    const episode = await createOneEpisode( data );
    return episode;
};

const updateEpisode = async (_, { id, data }) => {
    const episode = await updateById( id, data );
    return episode;
};

const deleteEpisode = async (_, { id }) => {
    const episode = await deleteById( id );
    return episode;
};

module.exports = {
    createEpisode,
    updateEpisode,
    deleteEpisode,
};