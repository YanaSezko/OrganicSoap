import React from 'react';
import ReactDOM from 'react-dom';
import SoapJSApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SoapJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
