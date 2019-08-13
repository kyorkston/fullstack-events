var { ApolloServer, gql } = require('apollo-server')
const {ApolloClient} = require('apollo-client')
const { createHttpLink } = require('apollo-link-http')
const fetch = require('node-fetch')
const { InMemoryCache} = require('apollo-cache-inmemory')

const models = require('../models')
const typeDefs = require('../data/schema')
const resolvers = require('../data/resolvers')

const server = new ApolloServer({ typeDefs, resolvers, context: {models} })

server.listen(4000).then(({url}) => {
  console.log('Running a GraphQL API server at localhost:4000/graphql')
})

const client = new ApolloClient({ 
  link: createHttpLink({ uri: "http://localhost:4000", fetch: fetch }), 
  cache: new InMemoryCache()
})

client.query({
    query: gql`
      query {
        allUsers{
          name
          email
        }
      }
    `
  })
  .then(result => console.log(result));

  global.fetch = require('node-fetch')
