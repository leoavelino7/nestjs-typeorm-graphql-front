import React from 'react';

import { Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import { history } from './services/history'
import { Routes } from './routes'

import api from './services/api'

import GlobalStyles from './styles/global'

function App() {
  return (
    <ApolloProvider client={api} >
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyles />
    </ApolloProvider>
  );
}

export default App;
