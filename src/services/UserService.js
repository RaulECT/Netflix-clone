const Users = require( '../models/Users' );

const getOneUserById = _id => Users
    .findById({
        _id, is_active: true
    })
    .populate({ path: 'series', model: 'series' })
    .populate( { path: 'movies', model: 'movies' } );

const createOneUser = data => Users.create( data );

module.exports = {
    getOneUserById,
    createOneUser
};