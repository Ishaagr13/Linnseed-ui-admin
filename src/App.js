/* import logo from './logo.svg'; */
import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Employee from './scenes/employee/Employee';
import Footer from './pages/Footer';
import Slidebar from './Components/Slidebar';
import Home from './Components/Home';
import Login from './pages/Forms/Login';
import useToken from './global/useToken'
import Mobile from './scenes/mobile/Mobile';
import Seller from './scenes/sellers/Seller';
import Createemp from './scenes/employee/Createemp';

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
        <Route path="/login" element={<Login />} />
        <Route path="/employee_add" element={<Createemp/>} />

        
              
                {/* <Route path="/seller" element={<Seller />} />
                <Route path="/buyers" element={<Buyers/>} />
                <Route path="/profileapproval" element={<Profile />} />
                <Route path="/feedback" element={<Feedback/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/enquiry" element={<Enquiry/>} />
                <Route path="/mobileappenquiry" element={<MobileAppEnquiry/>} />
                <Route path="/requestcall" element={<RequestCall/>} />
                <Route path="/callback" element={<CallBack/>} />
                <Route path="/create" element={<Create/>} />
                <Route path="/current" element={<Current/>} />
                <Route path="/target" element={<Target/>} />
                <Route path="/bussinesshistory" element={<History/>} />
                <Route path="/reports" element={<Reports/>} />
                <Route path="/billing" element={<Billing/>} />
                <Route path="/clientdetails" element={<ClientDetails/>} />
                <Route path="/managemasters" element={<ManageMasters/>} />
                <Route path="/companydetails" element={<CompanyDetails/>} />
                <Route path="/front" element={<AddFront/>} />
                <Route path="/testimonials" element={<Testimonials/>} />
                <Route path="/addvideo" element={<AddVideo/>} />
                <Route path="/viewvideo" element={<ViewVideo/>} />
                <Route path="/addblog" element={<AddBlog/>} />
                <Route path="/viewblog" element={<ViewBlog/>} />
                <Route path="/viewvideo" element={<ViewVideo/>} />
                <Route path="/statitics" element={<Statitics/>} />
                <Route path="/addoffer" element={<AddOffer/>} />
                <Route path="/viewoffer" element={<ViewOffer/>} />
                <Route path="/applyoffer" element={<WhatsappReports/>} />
                <Route path="/whatsappreports" element={<WhoApplyOffer/>} />
                <Route path="/addmicprice" element={<AddMICPrice/>} />
                <Route path="/viewmicprice" element={<ViewMICPrice/>} />
                <Route path="/addspotprice" element={<AddSpotPrice/>} />
                <Route path="/viewspotprice" element={<ViewSpotPrice/>} />
                
                <Route path="/dash" element={<Dashboard/>} /> */}
                
      </Routes>
      </div>
      </div>
      </BrowserRouter>
      
  );
}

export default App;
