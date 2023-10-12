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
import Select from 'react-select';

const userTypeOptions = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Super Admin', label: 'Super Admin' },
];
const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },

];
const statusOptions = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },

];

const Createemp = () => {
  const [usertypeOptions, setUsertypeOptions] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);


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
                    <Select
                      defaultValue={usertypeOptions}
                      onChange={setUsertypeOptions}
                      options={userTypeOptions}
                    />
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
                    <Select
                      defaultValue={selectedGender}
                      onChange={setSelectedGender}
                      options={genderOptions}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <hr />
            <hr />
            <div className="login_box">
              <h5>Login Credeantials</h5>
              <Form>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter Email"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="examplePassword">Status</Label>
                      <Select
                        defaultValue={selectedStatus}
                        onChange={setSelectedStatus}
                        options={statusOptions}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>
            <hr />
            <hr />

            <div className="profile-box">
              <h5>Profile Photo</h5>
              <form style={{ marginLeft: "30px" }}>
                <input type="file" />
              </form>
            </div>
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
              <Button color="primary" style={{padding:"1px 15px"}}><i className="material-icons left">send</i>Add{" "}</Button>
                       
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createemp;
