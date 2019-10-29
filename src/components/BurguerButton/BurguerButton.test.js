import React from 'react';
import ReactDOM from 'react-dom';
import BurguerButton from './BurguerButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BurguerButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
