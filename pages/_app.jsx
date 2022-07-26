import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import {client} from './apollo-client'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'



const MyApp = ({ Component, pageProps }) => {
  // const apolloClient = useApollo(pageProps)

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
