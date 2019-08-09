var { ApolloServer } = require('apollo-server')

const models = require('../models')
const typeDefs = require('../data/schema')
const resolvers = require('../data/resolvers')

const server = new ApolloServer({ typeDefs, resolvers, context: {models} })

server.listen(4000).then(({url}) => {
  console.log('Running a GraphQL API server at localhost:4000/graphql')
})

