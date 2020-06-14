import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {Provider} from 'react-redux';
import store from './redux/store';
import dotenv from 'dotenv';
import './index.css';
import Routes from './routes'
import * as serviceWorker from './serviceWorker';

dotenv.config();
const client = new ApolloClient({
    uri: process.env.REACT_APP_BACK_END_URL,
});


ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Provider store={store}>
             <Routes />
          </Provider>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
