import React from 'react';
import ReactDOM from 'react-dom';
import './api/mock/mock-api';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
