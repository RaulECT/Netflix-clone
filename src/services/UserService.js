const Users = require( '../models/Users' );

const getOneUserByEmail = email => Users
    .findOne({ email, is_active: true })
    .populate({ path: 'series', model: 'series' })
    .populate( { path: 'movies', model: 'movies' } );

const getOneUserById = _id => Users
    .findById({
        _id, is_active: true
    })
    .populate({ path: 'series', model: 'series' })
    .populate( { path: 'movies', model: 'movies' } );

const createOneUser = data => Users.create( data );

const updateById = (id, data) => Users
    .findByIdAndUpdate( { _id: id, is_active: true }, { ...data }, { new: true } )
    .populate({ path: 'series', model: 'series' })
    .populate( { path: 'movies', model: 'movies' } );

const deleteById = _id => Users
    .findByIdAndDelete( {_id} )
    .populate({ path: 'series', model: 'series' })
    .populate( { path: 'movies', model: 'movies' } );

module.exports = {
    getOneUserById,
    createOneUser,
    updateById,
    deleteById,
    getOneUserByEmail,
};