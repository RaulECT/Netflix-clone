const { createOneUser, updateById, deleteById } = require( '../../services/UserService' );

const createUser = async (_, { data }) => {
    const user = await createOneUser( data );
    return user;
};

const updateUser = async (_, { data, id }) => {
    const user = await updateById( id, data );
    return user;
};

const deleteUser = async (_, { id }) => {
    const user = await deleteById( id );
    return user;
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
};