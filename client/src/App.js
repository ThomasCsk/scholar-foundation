import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Staff from './pages/Staff';
import Questions from './pages/Questions';
import Dashboard from './pages/Dashboard';
import Donate from './pages/Donate';
import LogInSignUp from './pages/LogInSignUp';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header/>
          <div>
            <Routes>
              <Route
                path="/"
                element={<About/>}
              />
              <Route
                path="/staff"
                element={<Staff/>}
              />
              <Route
                path="/questions"
                element={<Questions/>}
              />
              <Route
                path="/dashboard"
                element={<Dashboard/>}
              />
              <Route
                path="/donate"
                element={<Donate/>}
              />
              <Route
                path="/loginsignup"
                element={<LogInSignUp/>}
              />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
