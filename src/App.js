import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Posts from './components/BodyContainer';
import Home from './components/Home';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphqlzero.almansi.me/api'
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App

