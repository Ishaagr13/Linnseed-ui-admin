import React, { useState } from "react";
import "./Dashboard.css";
import Slidebar from "./Components/Slidebar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Seller from "./pages/Seller";
import Mobile from "./pages/Mobile";
import Footer from "./pages/Footer";
import Buyers from "./pages/Buyers";
import Profile from './pages/Profile'
import Feedback from './pages/Enquiry/Feedback';
import Contact from './pages/Enquiry/Contact';
import RequestCall from './pages/Enquiry/RequestCall';
import Enquiry from './pages/Enquiry/Enquiry';
import MobileAppEnquiry from './pages/Enquiry/MobileAppEnquiry';
import CallBack from './pages/Enquiry/CallBack';
import Create from './pages/Deals/Create';
import Current from './pages/Deals/Current';
import Target from './pages/Deals/Target';
import History from './pages/History';
import Reports from "./pages/Reports";
import Billing from "./pages/Billing";
import ClientDetails from './pages/ClientDetails';
import ManageMasters from './pages/ManageMasters';
import CompanyDetails from './pages/CompanyDetails';
import AddFront from './pages/Front/AddFront';
import Testimonials from './pages/Front/Testimonials';
import AddVideo from './pages/Video/AddVideo';
import ViewVideo from './pages/Video/ViewVideo';
import AddBlog from './pages/Blog/AddBlog';
import ViewBlog from './pages/Blog/ViewBlog';
import Statitics from './pages/Statitics';
import WhoApplyOffer from './pages/Offer/WhoApplyOffer';
import AddOffer from './pages/Offer/AddOffer';
import ViewOffer from './pages/Offer/ViewOffer';
import WhatsappReports from './pages/Offer/WhatsappReports';
import AddMICPrice from './pages/CottonSpotPrice/AddMICPrice';
import ViewMICPrice from './pages/CottonSpotPrice/ViewMICPrice';
import AddSpotPrice from './pages/YarnPrice/AddSpotPrice';
import ViewSpotPrice from './pages/YarnPrice/ViewSpotPrice';
import Createemp from "./pages/Createemp";
import Login from "./pages/Forms/Login"

function Dashboard() {
  
  return (
    <div className="component">
      <body id="page-top">
        {/* <Router> */}
          <div id="wrapper">
            <Slidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <Routes>
              <Route path="/" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/mobileuser" element={<Mobile />} />
                <Route path="/seller" element={<Seller />} />
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
                <Route path="/employee_add" element={<Createemp/>} />
                <Route path="/dash" element={<Dashboard/>} />
              </Routes>
            </div>
          </div>
          
        {/* </Router> */}

        {/* Scroll to Top Button */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Logout Model  */}
      </body>
    </div>
  );
}

export default Dashboard;
