import React from 'react';
import './scss/index.scss';
import Dotenv from "dotenv";
import { Provider } from "react-redux";
import store from './redux/store';
import Main from './components';
import { Router } from 'react-router';
import Navigation from './navigation/index';

Dotenv.config();

function App() {
  return (
    <Provider store={store}>
      <Router history={Navigation.history}>
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
