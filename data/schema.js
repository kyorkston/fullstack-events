const { gql } = require('apollo-server')

const typeDefs = gql`
type User {
    id: Int!
    name: String!
    email: String!
    password: String!
  }

  type Event {
    id: Int!
    title: String!
    user: User!
  }

  type Query {
    user(id: Int!): User
    allUsers: [User!]!
    event(id: Int!): Event
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!

  }
`

module.exports = typeDefs
