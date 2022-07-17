import '../styles/globals.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraComponent, ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </React.StrictMode>
    )
}

export default MyApp
