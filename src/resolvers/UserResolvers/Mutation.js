const { createOneUser } = require( '../../services/UserService' );

const createUser = async (_, { data }) => {
    const user = await createOneUser( data );
    return user;
};

module.exports = {
    createUser
};