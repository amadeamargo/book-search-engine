const {gql} = require ('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!
    name: String!
    email: String!
    savedBooks : [Book]
    bookCount: Int
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
    createUser(username: String!, email: String!, password: String!)
    login(email: String!, password: String!)
    saveBook (input: SavedBok!)
    deleteBook(bookId: ID!)
}
`

module.exports = typeDefs;