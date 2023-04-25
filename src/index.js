import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let count = 1;

const root = ReactDOM.createRoot(document.getElementById('root'));
const refresh = () => root.render(
  <React.StrictMode>
    <App count={count} />
  </React.StrictMode>
);

setInterval(() => {
  refresh()
  count += 1
}, 1000)