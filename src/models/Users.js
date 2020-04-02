const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    series: {
        type: [ Schema.Types.ObjectId ],
        ref: 'series'
    },
    movies: {
        type: [ Schema.Types.ObjectId ],
        ref: 'movies'
    },
    profile_img: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model( 'users', UserSchema );