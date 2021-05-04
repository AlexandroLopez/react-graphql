import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './components/Home';
import Post from './components/Post';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphqlzero.almansi.me/api'
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path='/post/:id'>
            <Post />
          </Route>
          <Route path='/'>
          <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App

