import React from 'react';
import ReactDOM from 'react-dom/client';
// import './assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// import App from './App';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, Resume } from './components';
import Main from './pages/mainPg';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Resumes' element={<Resume />} />

    </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
