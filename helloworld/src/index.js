import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTacToe from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TicTacToe />, document.getElementById('root'));
registerServiceWorker();
