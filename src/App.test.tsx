import React from 'react';
import ReactDOM from 'react-dom';
import { AppComp } from './AppComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppComp message="Hello" seconds={0} onShowSeconds={() => {} } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
