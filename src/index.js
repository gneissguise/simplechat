import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import startServer from './server';

import Schat from './components/Schat';

import './styles/Styles.css';

startServer();

//const socket = io(`${location.protocol}//${location.hostname}:5757`);

ReactDOM.render(
  <Schat />,
  document.getElementById('root')
);
