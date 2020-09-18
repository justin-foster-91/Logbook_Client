import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CustomizePage from './CustomizePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><CustomizePage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})