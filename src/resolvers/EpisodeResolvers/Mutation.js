const { createOneEpisode, updateById, deleteById, getOneEpisodeById } = require( '../../services/EpisodeService' );
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

const viewEpisode = async (_, { id } ) => {
    const episode = await getOneEpisodeById( id );
    const views = episode.views + 1 ;
    const episodeUpdated = await updateById( id, { views } );
    return episodeUpdated;
};

module.exports = {
    createEpisode,
    updateEpisode,
    deleteEpisode,
    viewEpisode,
};