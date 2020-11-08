import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Root from 'views/Root';
import 'assets/main.css';
import { auth } from 'fb';

ReactDOM.render(
  <React.StrictMode>
    {console.log(auth.currentUser)}
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
