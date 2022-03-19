const {gql} = require ('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!
    name: String!
    email: String!
}

type Query {
    user: [User]
}

type Mutation {
    createUser
    login
    saveBook
    deleteBook
}
`

module.exports = typeDefs;