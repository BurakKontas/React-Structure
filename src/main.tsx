import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

import './index.css'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
)
