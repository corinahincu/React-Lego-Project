import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Square from './lego/Square';
import Triangle from './lego/Triangle';
import Shape from './lego/Shape';
import Hexagon from './lego/Hexagon'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Square color="orange" size={150} place={[50, 100]} />
    <Triangle color="green" size={50} place={[150, 50]} />
    <Hexagon color="blue" size={150} place={[50, 300]} />
    <Shape />
  </React.StrictMode>
);

reportWebVitals();
