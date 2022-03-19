const {gql} = require ('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!
    name: String!
    email: String!
    savedBooks : [Book]
    bookCount: Int
}

type Auth {
    token: ID!
    user: User
}
type Book {
    bookID: ID!
    authors: [String]
    description: String
    image: String
    link: String!
}
type Query {
    user: [User]
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook (input: SavedBok!): User
    deleteBook(bookId: ID!): User
}
`

module.exports = typeDefs;