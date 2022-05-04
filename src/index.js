import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StytchProvider} from "@stytch/stytch-react";
import {initStytch} from "@stytch/stytch-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
const stytch = initStytch(process.env.REACT_APP_STYTCH_PUBLIC_TOKEN);

root.render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <App/>
    </StytchProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
