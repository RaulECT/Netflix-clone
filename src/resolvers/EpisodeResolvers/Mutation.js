const { createOneEpisode } = require( '../../services/EpisodeService' );

const createEpisode = async (_, { data }) => {
    const episode = await createOneEpisode( data );
    return episode;
};

module.exports = {
    createEpisode,
};