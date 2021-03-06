import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  // create DOM element to render code into
  const div = document.createElement('div');

  // render the component
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<BrowserRouter><App /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
