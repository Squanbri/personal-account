import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import store from './store/store';
import App from './App';
import 'assets/styles/normalize.css';

export const Context = createContext({
  store: store,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        store: store,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
);
