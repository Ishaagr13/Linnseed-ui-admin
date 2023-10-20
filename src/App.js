/* import logo from './logo.svg'; */
import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './pages/Employee';
import Footer from './pages/Footer';
import Slidebar from './Components/Slidebar';
import Home from './Components/Home';
import Login from './pages/Forms/Login';
import useToken from './global/useToken'
import Mobile from './pages/Mobile';
import Seller from './pages/Seller';

function App() {

  return (
    <>
      {/* <Slidebar /> */}
      {/* <Dashboard /> */}
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/dash" element={<Dashboard />}/>
        {/* <Route path="/dashboard" element={token ? <Dashboard /> : <Login setToken={setToken} />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/mobileuser" element={<Mobile />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
