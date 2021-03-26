import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'mobx-react'
import { ClientsStore, Users } from './stores/ClientsStore';


let clientsStore = new ClientsStore()
const store = {clientsStore}

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
