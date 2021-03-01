import { ApolloClient , InMemoryCache , createHttpLink} from '@apollo/client'
import fetch from 'cross-fetch'

export const link = createHttpLink({
    fetch,
    uri: '/.netlify/functions/newLolly'
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
})

export default client