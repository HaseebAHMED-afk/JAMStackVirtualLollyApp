const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require('faunadb')
const q = faunadb.query
const dotenv = require('dotenv').config();

const typeDefs = gql`
  type Query {
    getLollyByUrl(path: String!) : Lolly
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
      lollyPath: String!
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
    getLollyByUrl: async (_ , {path}) => {
      try {
        var client = new faunadb.Client({
          secret: process.env.FAUNADB_SECRET
        })

        var result = await client.query(
          q.Get(q.Match(q.Index('lolly_by_path')))
        )

        return result.data

      } catch (error) {
        console.log('err' , error);
      }
    }
  },
  Mutation : {
    createLolly: async (_, args) => {

      const client = new faunadb.Client({
        secret: process.env.FAUNADB_SECRET
      })
      const result = await client.query(
        q.Create(q.Collection('lollies') , {
          data: args
        })
      )
      console.log(result.data);



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
