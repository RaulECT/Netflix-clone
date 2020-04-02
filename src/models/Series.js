const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const SerieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image_cover_uri: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: [ 'Action', 'Romance', 'Comedy' ]
    },
    episodes: {
        type: [Schema.Types.ObjectId],
        ref: 'episodes'
    },
    rating: {
        type: Number,
        default: 0
    },
    trailer_uri: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    is_avaible: {
        type: Boolean,
        default: true
    },
    liked_by: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    }
});

module.exports = mongoose.model( 'series', SerieSchema );