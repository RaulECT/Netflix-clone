const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
    serie: {
        type: Schema.Types.ObjectId,
        ref: 'series'
    },
    name: {
        type: String,
        required: true
    },
    image_cover_uri: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    emition_date: {
        type: String,
        required: true
    },
    video_uri: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    is_avaible: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model( 'episodes', EpisodeSchema );