import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Root from 'views/Root';
import 'assets/main.css';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
