import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from "./Game.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
