import React from 'react'
import Register from './Register'
import Login from './Login'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from '../../Dashboard';

const Form = () => {
    return (
        <>
            <p>Go to index.js if you want to see the dashboard uncomment Dashboard component</p>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/dash" element={<Dashboard/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Form