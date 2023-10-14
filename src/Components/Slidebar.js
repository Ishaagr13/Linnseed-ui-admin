import React, { useState } from "react";
import logo from "../assets/logo-linn.png"
import '../Components/Slidebar.css';

const Slidebar = () => {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  return (
    <div className="slidebar-nav">
      <ul className={style} id="accordionSidebar">
        {/*  <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <img src={logo} style={{ width: "50px" }} />
          </div>
          <div className="sidebar-brand-text mx-3">Linnseed Admin </div>
          <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
              onClick={changeStyle}
            ></button>
          </div>
        </a>

        {/*   <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/*  <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active" id="hovering">
          <a className="nav-link" href="/">
            <i class="material-icons">settings_input_svideo</i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/employee">
            <i class="material-icons">group</i>
            <span>Employee</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/mobileuser">
            <i class="material-icons">phone</i>
            <span>Mobile User</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <i class="material-icons">dvr</i>
            <span>Sellers</span>
          </a>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/seller">
                <i class="material-icons">radio_button_unchecked</i>
                <span>View Sellers</span>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i class="material-icons">account_box</i>
            <span>Buyers</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
              <a className="collapse-item" href="/buyers">
                View Buyers
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/profileapproval">
            <i class="material-icons">business</i>
            <span>Profile Approval</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i class="material-icons">phone</i>
            <span>Enquiry</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Login Screens:</h6> */}
              <a className="collapse-item" href="/feedback">
                Feedback
              </a>
              <a className="collapse-item" href="/requestcall">
                Request call
              </a>
              <a className="collapse-item" href="/contact">
                Contact Us
              </a>
              <a className="collapse-item" href="/callback">
                Call Back
              </a>
              <a className="collapse-item" href="/enquiry">
                Enquiry
              </a>
              <a className="collapse-item" href="/mobileappenquiry">
                Mobile App Enquires
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsefour"
            aria-expanded="true"
            aria-controls="collapsefour"
          >
            <i class="material-icons">library_books</i>
            <span>Buissness Deals</span>
          </a>
          <div
            id="collapsefour"
            className="collapse"
            aria-labelledby="headingfour"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Custom Components:</h6> */}
              <a className="collapse-item" href="/current">
                Current Deals
              </a>
              <a className="collapse-item" href="/create">
                Create Deals
              </a>
              <a className="collapse-item" href="/target">
                Target Deals
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/bussinesshistory">
            <i class="material-icons">business</i>
            <span>Buisness History</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/reports">
            <i class="material-icons">business</i>
            <span>Reports</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/billing">
            <i class="material-icons">account_balance</i>
            <span>Billing</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/clientdetails">
            <i class="material-icons">chrome_reader_mode</i>
            <span>My Client Details</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/managemasters">
            <i class="material-icons">supervisor_account</i>
            <span>Manage Masters</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/companydetails">
            <i class="material-icons">details</i>
            <span>Company Details</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsefsix"
            aria-expanded="true"
            aria-controls="collapsefsix"
          >
            <i class="material-icons">business</i>
            <span>Front</span>
          </a>
          <div
            id="collapsefsix"
            className="collapse"
            aria-labelledby="headingfsix"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Custom Components:</h6> */}
              <a className="collapse-item" href="/front">
                Add Front
              </a>
              <a className="collapse-item" href="/testimonials">
                View Testimonials
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsesix"
            aria-expanded="true"
            aria-controls="collapsesix"
          >
            <i class="material-icons">note</i>
            <span>Blog</span>
          </a>
          <seven
            id="collapsesix"
            className="collapse"
            aria-labelledby="headingsix"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Custom Components:</h6> */}
              <a className="collapssixtem" href="/addblog">
                Add blog
              </a>
              <a className="collapse-item" href="/viewblog">
                View Blog
              </a>
            </div>
          </seven>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseseven"
            aria-expanded="true"
            aria-controls="collapseseven"
          >
            <i class="material-icons">videocam</i>
            <span>Video</span>
          </a>
          <div
            id="collapseseven"
            className="collapse"
            aria-labelledby="headingseven"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/addvideo">
                Add Video
              </a>
              <a className="collapse-item" href="/viewvideo">
                View Video
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/statitics">
            <i class="material-icons">account_box</i>
            <span>Statistics</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseeight"
            aria-expanded="true"
            aria-controls="collapseeight"
          >
            <i class="material-icons">notifications</i>
            <span>Offer</span>
          </a>
          <div
            id="collapseeight"
            className="collapse"
            aria-labelledby="headingeight"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/addoffer">
                Add Offer
              </a>
              <a className="collapse-item" href="/viewoffer">
                View Offer
              </a>
              <a className="collapse-item" href="/applyoffer">
                Who Apply Offer
              </a>
              <a className="collapse-item" href="/whatsappreports">
                Whatsapp Reports
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsenine"
            aria-expanded="true"
            aria-controls="collapsenine"
          >
            <i class="material-icons">aspect_ratio</i>
            <span>Cotton Bales Spot Price</span>
          </a>
          <div
            id="collapsenine"
            className="collapse"
            aria-labelledby="headingnine"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/addmicprice">
                Add MIC Price
              </a>
              <a className="collapse-item" href="/viewmicprice">
                View MIC Price
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="material-icons">add_location</i>
            <span>Yarn Spot Price</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/addspotprice">
                Add Spot Price
              </a>
              <a className="collapse-item" href="/viewspotprice">
                View Spot Price
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
