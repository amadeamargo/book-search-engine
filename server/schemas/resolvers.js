//queries:
//get single user

//mutations:
//create user
//deletebook
//login
//deletebook

const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (_id) => {
            const params = _id ? { _id } : {};
            return User.find({params})
        },
    },
    Mutation: {
        createUser: async (parent, {username, email, password}) => {
            const createUser = await User.create({username, email, password});
            const token = signToken (user)
            return {token, user};
        },
    }
}

module.exports = resolvers;