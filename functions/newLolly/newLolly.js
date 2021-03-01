const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require('faunadb');
const q = faunadb.query
const shortid = require('shortid');
const dotenv = require('dotenv').congig();

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Lolly {
    recepientName: String!
    message: String!
    from: String!
    flavorTop: String!
    flavorMiddle: String!
    flavorBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly(
      recepientName: String!
      message: String!
      from: String!
      flavorTop: String!
      flavorMiddle: String!
      flavorBottom: String!
    ): Lolly
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
  Mutation : {
    createLolly: (_, args) => {

      const client = new faunadb.Client({
        secret: process.env.FAUNADB_SECRET
      })

      const id = shortid.generate();

      args.lollyPath = id;

      const result = await client.query(
        q.Create(q.Collection('lollies') , {
          data: args
        })
      )
      console.log(result);



      return result.data
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
