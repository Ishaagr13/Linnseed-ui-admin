import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css'; */
import Dashboard from './Dashboard';
import Form from './pages/Forms/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const condition = true;
root.render(
  <React.StrictMode>
    {/* <Dashboard/>  */}
    <Form/>

    {/* {condition ?  <Dashboard/> :  <Form/>} */}
  </React.StrictMode>
);
