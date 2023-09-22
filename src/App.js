/* import logo from './logo.svg'; */
import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './pages/Employee';
import Footer from './pages/Footer';
import Slidebar from './Components/Slidebar';

function App() {
  return (
    <>
     <BrowserRouter>
       <div className='app-contain'>
        <Dashboard/>
        <Routes>
          <Route path="/employee" element={<Employee/>}/>
        </Routes>
       </div>
     </BrowserRouter>
    </>
  );
}

export default App;
