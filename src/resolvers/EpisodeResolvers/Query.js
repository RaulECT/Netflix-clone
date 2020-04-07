const { getOneEpisodeById } = require( '../../services/EpisodeService' );

const getEpisodeById = async (_, { id }) => {
    const episode = await getOneEpisodeById( id );
    console.log(episode);
    return episode;
};

module.exports = {
    getEpisodeById,
};