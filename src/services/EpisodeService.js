const Episode = require( '../models/Episodes' );

const createOneEpisode = data => Episode.create( data );

const getOneEpisodeById = _id => Episode
    .findById({ _id })
    .populate({ path: 'serie', model: 'series' });

const updateById = ( _id, data ) => Episode
    .findByIdAndUpdate({ _id }, { ...data }, { new: true })
    .populate({ path: 'serie', model: 'series' });

const deleteById = _id => Episode
    .findByIdAndDelete( {_id} )
    .populate({ path: 'serie', model: 'series' });

const deleteCollectionByIds = collection => Episode.deleteMany({ _id: { $in: collection } });

module.exports = {
    createOneEpisode,
    getOneEpisodeById,
    updateById,
    deleteById,
    deleteCollectionByIds,
};