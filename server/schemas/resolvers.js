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
        createUser: async (parent, args) => {
            const createUser = await User.create(args);
            return createUser;
        },
    }
}

module.exports = resolvers;