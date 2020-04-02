const { getOneUserById } = require( '../../services/UserService' );

const getUserById = async (_, {id}) => {
    const user = await getOneUserById( id );
    return user;
};

module.exports = {
    getUserById
};