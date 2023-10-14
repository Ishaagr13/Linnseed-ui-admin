import React from 'react'
import Register from './Register'
import Login from './Login'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Form = () => {
    return (
        <>
        <p>Go to index.js if you want to see the dashboard uncomment Dashboard component</p>
            <Router>
                <Routes>
                    <Route  path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route  path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    )
}

export default Form