import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SignupForm from './SignupForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SignupForm /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<BrowserRouter><SignupForm /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});