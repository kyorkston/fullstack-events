var { ApolloServer, gql } = require('apollo-server')
const Boost = require('apollo-boost')
const ApolloClient = Boost.default
const fetch = require('node-fetch')

const models = require('../models')
const typeDefs = require('../data/schema')
const resolvers = require('../data/resolvers')

const server = new ApolloServer({ typeDefs, resolvers, context: {models} })

server.listen(4000).then(({url}) => {
  console.log('Running a GraphQL API server at localhost:4000/graphql')
})

const client = new ApolloClient({fetch: fetch})

client.query({
    query: gql`
      allUsers{
        name
        email
      }
    `
  })
  .then(result => console.log(result));
