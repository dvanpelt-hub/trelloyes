import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('Messages testing component', () => {
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card name="Card" key={1}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });
});