import React, { useState } from "react";
import TopNav from "../Components/TopNav";
import "../pages/Employee.css";
import "../pages/Createemp.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Row, Col, Label, Input } from "reactstrap";

const Createemp = () => {
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This function will take you to the previous page
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
                    <Label for="exampleEmail">Employee Name</Label>
                    <Input
                      id="examplename"
                      name="name"
                      placeholder="Employee Name"
                      type="Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="userTypeSelect">User Type</Label>
                    <Input type="select" name="userType" id="userTypeSelect">
                      <option value="admin">Admin</option>
                      <option value="superadmin">Superadmin</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleDatetime">Date Of Birth</Label>
                <Input
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDatetime">Date Of Joining</Label>
                <Input
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />
              </FormGroup>

              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="examplePoa">POA</Label>
                    <Input id="examplePoa" name="city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="examplePoi">POI</Label>
                    <Input id="examplePoi" name="poi" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleSelect">Gender</Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      style={{ padding: "" }}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createemp;
