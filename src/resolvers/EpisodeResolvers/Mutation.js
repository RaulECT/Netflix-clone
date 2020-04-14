const { createOneEpisode, updateById, deleteById } = require( '../../services/EpisodeService' );
const { uploadFile } = require( '../../utils/storage' );

const createEpisode = async (_, { data }) => {
    const episodeCover = await uploadFile( data.image_cover_uri );
    const episodeVideo = await uploadFile( data.video_uri );
    const episode = await createOneEpisode( {
        ...data,
        image_cover_uri: episodeCover,
        video_uri: episodeVideo
    } );
    return episode;
};

const updateEpisode = async (_, { id, data }) => {
    const episodeCover = await uploadFile( data.image_cover_uri );
    const episodeVideo = await uploadFile( data.video_uri );
    const episode = await updateById( id, {
        ...data,
        image_cover_uri: episodeCover,
        video_uri: episodeVideo
    } );
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