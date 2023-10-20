import React, { useState } from "react";
import TopNav from "../../Components/TopNav";
import "./Employee.css";
import "./Createemp.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Row, Col, Label, Input } from "reactstrap";
import Select from "react-select";
import axios from "axios";
import useToken from "../../global/useToken";

const userTypeOptions = [
  { value: "Employee", label: "Employee" },
  { value: "Super Admin", label: "Super Admin" },
];
const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const Createemp = () => {
  const [usertypeOptions, setUsertypeOptions] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const navigate = useNavigate();

  const { token, setToken } = useToken();

  const goBack = () => {
    navigate(-1); // This function will take you to the previous page
  };

  const [post, setPost] = useState({
    userName: "Preeti",
    password: "demo",
    firstName: "Preeti",
    lastName: "Patel",
    email: "xyz@gmail.com",
    mobile: "9745023353",
    dob: "1989-10-28",
    gender: "M",
    doj: "2023-10-01",
    poaType: "PAN",
    poaNumber: "DRMMM1234N",
    poiType: "AADHAR",
    poiNumber: "999956789012",
    address: "Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    pinCode: "452001",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.event });
  };

  const creatEmployee = async (e) => {
    e.preventDefault();

    const authToken = localStorage.getItem("authToken");
    const headers = {
      Authorization: `Bearer ${authToken}`,
      // "Content-Type": "application/json", // You can specify other headers if needed
    };

    console.log(token);
    try {
      console.log(post);
      const response = await axios.post(
        "http://localhost:8891/api/admin/emp",
        post,
        { headers }
      );
    } catch (error) {
      console.error("Login failed. Error:", error);
    }
  };

  return (
    <div>
      <TopNav />
      <div className="upper-box">
        <div className="adjust">
          <h5>Employee Add</h5>
          <div className="cont">
            <a href="">Employee</a>
            <IoIosArrowForward />
            <a href="">Employee add</a>
          </div>
        </div>
      </div>
      {/* Starting of emp form creation*/}
      <div className="tables">
        <div className="subject">
          <div className="circle">
            <IoIosArrowBack className="icon" onClick={goBack} />
          </div>
          <h5>Employee Information</h5>
          <div className="create-form">
            <Form>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      type="firstName"
                      onChange={handleInput}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      type="lastName"
                      onChange={handleInput}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleSelect">Gender</Label>
                    <Select
                      defaultValue={selectedGender}
                      onChange={setSelectedGender}
                      options={genderOptions}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Login UserName</Label>
                    <Input
                      id="userName"
                      name="userName"
                      placeholder="UserName"
                      type="Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="password"
                      type="Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="mobile">Mobile</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      placeholder="Enter mobile"
                      type="mobile"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleDatetime">Date Of Birth</Label>
                    <Input
                      id="exampleDate"
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleDatetime">Date Of Joining</Label>
                    <Input
                      id="exampleDate"
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <h5>User Address</h5>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="address"
                      type="address"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="city"
                      type="city"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      placeholder="state"
                      type="state"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="pinCode">PIN Code</Label>
                    <Input id="pinCode" name="pinCode" />
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <div className="profilePhoto">
                    <h5>Profile Photo</h5>
                    {/* <form style={{ marginLeft: "30px" }}>
                      <input type="file" />
                    </form> */}
                  </div>
                </Col>
              </Row>

              <h5>Proof of Address</h5>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="examplePoa">POA</Label>
                    <Input id="examplePoa" name="city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="poa_number">POA Number</Label>
                    <Input id="poa_number" name="poa" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <div className="poa-box">
                    <h5>POA Upload</h5>
                    {/* <form style={{ marginLeft: "30px" }}>
                      <input type="file" />
                    </form> */}
                  </div>
                </Col>
              </Row>
              <h5>Proof of Identity</h5>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="examplePoi">POA</Label>
                    <Input id="examplePoi" name="city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="poi_number">POI Number</Label>
                    <Input id="poi_number" name="poi" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <div className="poi-box">
                    <h5>POI Upload</h5>
                    {/* <form style={{ marginLeft: "30px" }}>
                      <input type="file" />
                    </form> */}
                  </div>
                </Col>
              </Row>
            </Form>
            <hr />
            <hr />

            <div className="buye-info">
              <div className="buye-name">Buyer Information</div>
              {/* <TableDemo/> */}
            </div>
            <hr />
            <hr />
            <div className="buye-info">
              <div className="buye-name">Seller Information</div>
            </div>
            <hr />
            <hr />
            <div className="add-butt">
              <Button color="primary" style={{ padding: "1px 15px" }}>
                <i
                  className="material-icons left"
                  onClick={creatEmployee}
                  type="submit"
                >
                  send
                </i>
              </Button>
                       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createemp;
