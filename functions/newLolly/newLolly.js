const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require('faunadb')
const q = faunadb.query
const dotenv = require('dotenv').config();
const axios = require('axios')

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
          q.Get(q.Match(q.Index('lolli_by_url'), path))
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
      if(result){
        try {
          axios.post('https://api.netlify.com/build_hooks/6044e753bfc64814bf1a6515')
        } catch (error) {
          console.error(error)
        }
      }



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
