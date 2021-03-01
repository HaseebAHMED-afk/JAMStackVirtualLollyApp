const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require('faunadb');
const q = faunadb.query
const shortId = require('shortid')

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
  type Mutations {
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
    authorByName: (root, args) => {
      console.log("hihhihi", args.name)
      return authors.find(author => author.name === args.name) || "NOTFOUND"
    },
  },
  Mutation : {
    createLolly: (_, args) => {
      console.log(args.name);

      return {
        message: 'Hello'
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
