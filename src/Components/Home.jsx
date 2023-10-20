import React from "react";
import TopNav from "./TopNav";
import Table from "react-bootstrap/Table";
import Footer from "../pages/Footer";
import { MDBDataTable } from "mdbreact";

const Home = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372",
      },

      {
        name: "Timothy Mooney",
        position: "Office Manager",
        office: "London",
        age: "37",
        date: "2008/12/11",
        salary: "$136",
      },
      {
        name: "Jackson Bradshaw",
        position: "Director",
        office: "New York",
        age: "65",
        date: "2008/09/26",
        salary: "$645",
      },
      {
        name: "Olivia Liang",
        position: "Support Engineer",
        office: "Singapore",
        age: "64",
        date: "2011/02/03",
        salary: "$234",
      },

      {
        name: "Thor Walton",
        position: "Developer",
        office: "New York",
        age: "61",
        date: "2013/08/11",
        salary: "$98",
      },
      {
        name: "Finn Camacho",
        position: "Support Engineer",
        office: "San Francisco",
        age: "47",
        date: "2009/07/07",
        salary: "$87",
      },
      {
        name: "Serge Baldwin",
        position: "Data Coordinator",
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
      },
      {
        name: "Zenaida Frank",
        position: "Software Engineer",
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
      },
      {
        name: "Zorita Serrano",
        position: "Software Engineer",
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
      },
      {
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        salary: "$75",
      },
      {
        name: "Cara Stevens",
        position: "Sales Assistant",
        office: "New York",
        age: "46",
        date: "2011/12/06",
        salary: "$145",
      },
      {
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356",
      },
      {
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103",
      },
      {
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86",
      },
      {
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183",
      },
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183",
      },
      {
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: "27",
        date: "2011/01/25",
        salary: "$112",
      },
    ],
  };
  return (
    <div>
      <div id="content">
        {/* <!-- Begin Page Content --> */}

        <TopNav />
        <div className="container-fluid">
          {/*  <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a
              href="#"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Generate
              Report
            </a>
          </div>

          <div className="row">
            {/*   <!-- Area Chart --> */}
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/*  <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h5 className="m-0 font-weight-bold text-primary">
                    Total Leads
                  </h5>
                  <h6 className="m-0 font-weight-bold text-primary">
                    Leads Generated Financial Year wise
                  </h6>
                  <div className="dropdown no-arrow">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <div className="dropdown-header">Dropdown Header:</div>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                {/*  <!-- Card Body --> */}
                <div className="card-body">
                  <div className="chart-area">
                    <canvas id="myAreaChart"></canvas>
                  </div>
                </div>
              </div>
            </div>

            {/*  <!-- Pie Chart --> */}
            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                {/*  <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Total Commission
                  </h6>
                  <h6 className="m-0 font-weight-bold text-primary">
                    & days cycle
                  </h6>

                  <div className="dropdown no-arrow">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <div className="dropdown-header">Dropdown Header:</div>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                {/*  <!-- Card Body --> */}
                <div className="card-body">
                  <div className="chart-pie pt-2 pb-2">
                    <canvas id="myPieChart"></canvas>
                  </div>
                  <div className="mt-3 text-center small">
                    {/* <span className="mr-2">
                                                        <i className="fas fa-circle text-primary"></i> Direct
                                                    </span>
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-success"></i> Social
                                                    </span>
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-info"></i> Referral
                                                    </span> */}
                    <h6 class="center-align">₹ 11088960416.45</h6>
                    <p class="medium-small center-align">Total Business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col s12 m6 l6 xl3">
              <div
                class="card gradient-45deg-light-blue-cyan gradient-shadow min-height-100 white-text animate fadeLeft"
                style={{
                  background: "linear-gradient(45deg, #0288d1, #26c6da)",
                  color: "white",
                }}
              >
                <div
                  class="padding-4"
                  style={{ display: "flex", padding: "1px 5px" }}
                >
                  <div class="col s7 m7">
                    <i class="material-icons background-round mt-5">
                      add_shopping_cart
                    </i>
                    <p>Deals</p>
                  </div>
                  <div
                    class="col s5 m5 right-align"
                    style={{ marginTop: "45px" }}
                  >
                    <h5 class="mb-0 white-text"></h5>
                    <p class="no-margin">Active</p>
                    <p>1381</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12 m6 l6 xl3">
              <div
                class="card gradient-45deg-red-pink gradient-shadow min-height-100 white-text animate fadeLeft"
                style={{
                  background: "linear-gradient(45deg, #ff5252, #f48fb1)",
                  color: "white",
                }}
              >
                <div
                  class="padding-4"
                  style={{ display: "flex", padding: "1px 5px" }}
                >
                  <div class="col s7 m7">
                    <i class="material-icons background-round mt-5">
                      perm_identity
                    </i>
                    <p>Deals in Process</p>
                  </div>
                  <div
                    class="col s5 m5 right-align"
                    style={{ marginTop: "45px" }}
                  >
                    <h5 class="mb-0 white-text"></h5>
                    <p class="no-margin">Active</p>
                    <p>292</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12 m6 l6 xl3">
              <div
                class="card gradient-45deg-amber-amber gradient-shadow min-height-100 white-text animate fadeRight"
                style={{
                  background: "linear-gradient(45deg, #ff6f00, #ffca28)",
                  color: "white",
                }}
              >
                <div
                  class="padding-4"
                  style={{ display: "flex", padding: "1px 5px" }}
                >
                  <div class="col s7 m7">
                    <i class="material-icons background-round mt-5">timeline</i>
                    <p>Total Buyers</p>
                  </div>
                  <div
                    class="col s5 m5 right-align"
                    style={{ marginTop: "45px" }}
                  >
                    <h5 class="mb-0 white-text"></h5>
                    <p class="no-margin">Active</p>
                    <p>326</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12 m6 l6 xl3">
              <div
                class="card gradient-45deg-green-teal gradient-shadow min-height-100 white-text animate fadeRight"
                style={{
                  background: "linear-gradient(45deg, #43a047, #1de9b6)",
                  color: "white",
                }}
              >
                <div
                  class="padding-4"
                  style={{ display: "flex", padding: "1px 5px" }}
                >
                  <div class="col s7 m7">
                    <i class="material-icons background-round mt-5">
                      attach_money
                    </i>
                    <p>Total Sellers</p>
                  </div>
                  <div
                    class="col s5 m5 right-align"
                    style={{ marginTop: "45px" }}
                  >
                    <h5 class="mb-0 white-text"></h5>
                    <p class="no-margin">Today</p>
                    <p>681</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 18 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 18 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 18 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 18 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table> */}

        <div
          className="Table-container"
          style={{ margin: "10px 20px", padding: "20px" }}
        >
          <MDBDataTable
            striped
            bordered
            // paging={false}
            small
            data={data}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
