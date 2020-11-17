import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Provider from './Contexto';
import 'bootstrap/dist/css/bootstrap.min.css';

/** => Provider es el contenedor global de la app @type {Object} */ /**/

/** => Provider es el contenedor global de la app @type {Object} */ /**/

/** => Provider es el contenedor global de la app @type {Object} */ /**/
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
