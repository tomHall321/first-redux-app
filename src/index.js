import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from "./data/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



//sets up subscription to store, so when the state updates render will be run again.

//all redux stuff is in ./data