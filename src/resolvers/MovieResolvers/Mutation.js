const { createOneMovie, updateById, deleteById, getMovieById } = require( '../../services/MovieService' );
const { uploadFile } = require( '../../utils/storage' );

const createMovie = async (_, { data }) => {
    const movieCover = await uploadFile( data.image_cover_uri );
    const movieVideo = await uploadFile( data.video_uri, true );
    const movieTrailer = await uploadFile( data.trailer_uri, true );

    const movie = await createOneMovie( {
        ...data,
        image_cover_uri: movieCover,
        video_uri: movieVideo,
        trailer_uri: movieTrailer
    } );

    return movie;
};

const updateMovie = async (_, { data, id }) => {
    const movieCover = await uploadFile( data.image_cover_uri );
    const movieVideo = await uploadFile( data.video_uri, true );
    const movieTrailer = await uploadFile( data.trailer_uri, true );

    const movie = await updateById( id, {
        ...data,
        image_cover_uri: movieCover,
        video_uri: movieVideo,
        trailer_uri: movieTrailer
    } );
    return movie;
};

const deleteMovie = async (_, { id }) => {
    const movie = await deleteById( id );
    return movie;
};

const rateMovie = async (_, { movie_id, user_id, rate }) => {
    const movie = await getMovieById( movie_id );
    const movieLikes = [...movie.liked_by, user_id];
    const movieRate = (movie.rating + rate) / movieLikes.length;
    const movieUpdated = await updateById( movie_id, { liked_by: movieLikes, rating: movieRate } );

    return movieUpdated;
};

const viewMovie = async (_, { id } ) => {
    const movie = await getMovieById( id );
    const views = movie.views + 1 ;
    const movieUpdated = await updateById( id, { views } );
    return movieUpdated;
};

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    rateMovie,
    viewMovie,
};