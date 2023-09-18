import React from "react";
import TopNav from "./TopNav";
import Table from "react-bootstrap/Table";

const Home = () => {
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
                      <i class="material-icons background-round mt-5">
                        timeline
                      </i>
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
          <Table responsive>
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
          </Table>
        </div>
    </div>
  );
};

export default Home;
