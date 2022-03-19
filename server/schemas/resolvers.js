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
            const user = await User.create({username, email, password});
            const token = signToken (user)
            return {token, user};
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            const correctPw = await user.isCorrectPassword(password)
            if (!correctPw){
                throw new AuthenticationError("Login unsuccessful")
            }
            const token = signToken(user);
            return {token, user}
        }
    }
}

module.exports = resolvers;