import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './react_context_2/components/App'; // Modify this to show App from different directories

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);