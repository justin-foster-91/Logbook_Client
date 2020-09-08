import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CreateShipPage from './CreateShipPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><CreateShipPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})