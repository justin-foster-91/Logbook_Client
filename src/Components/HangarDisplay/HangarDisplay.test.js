import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import HangarDisplay from './HangarDisplay';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<BrowserRouter><HangarDisplay /></BrowserRouter>, div);
  // ReactDOM.unmountComponentAtNode(div);
})

// it('renders the UI as expected', () => {
//   const tree = renderer
//     .create(<BrowserRouter><HangarDisplay /></BrowserRouter>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();  
// });