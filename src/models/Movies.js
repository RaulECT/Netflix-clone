const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
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
    date: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    video_uri: {
        type: String,
        required: true
    },
    trailer_uri: {
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
    },
    liked_by: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    }
}, { timestamps: true });

module.exports = mongoose.model('movies', MovieSchema );