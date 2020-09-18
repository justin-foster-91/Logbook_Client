import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import HangarPage from './HangarPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><HangarPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

// it('renders the UI as expected', () => {
//   const tree = renderer
//     .create(<HangarPage></HangarPage>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();  
// });