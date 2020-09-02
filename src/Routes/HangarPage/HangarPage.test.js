import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HangarPage from './HangarPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><HangarPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})