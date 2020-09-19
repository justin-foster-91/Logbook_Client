import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CustomizePage from './CustomizePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><CustomizePage match={{params: {id: 1}}} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<BrowserRouter><CustomizePage match={{params: {id: 1}}} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
