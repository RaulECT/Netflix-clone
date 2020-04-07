const Episode = require( '../models/Episodes' );

const createOneEpisode = data => Episode.create( data );
const getOneEpisodeById = _id => Episode
    .findById({ _id })
    .populate({ path: 'serie', model: 'series' });
const updateById = ( _id, data ) => Episode
    .findByIdAndUpdate({ _id }, { ...data }, { new: true })
    .populate({ path: 'serie', model: 'series' });

module.exports = {
    createOneEpisode,
    getOneEpisodeById,
    updateById,
};