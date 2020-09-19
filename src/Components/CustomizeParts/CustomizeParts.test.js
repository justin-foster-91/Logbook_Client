import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CustomizeParts from './CustomizeParts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><CustomizeParts targetShip={{ship_parts: [{options: []}]}}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})
