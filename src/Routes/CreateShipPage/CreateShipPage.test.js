import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CreateShipPage from './CreateShipPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><CreateShipPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<BrowserRouter><CreateShipPage /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
