import React from "react";
import TopNav from "../Components/TopNav";
import "../pages/Employee.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { MDBDataTable } from "mdbreact";

const Seller = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Surname",
        field: "surname",
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
      {
        label: "Extn.",
        field: "extn",
        sort: "asc",
        width: 100,
      },
      {
        label: "E-mail",
        field: "email",
        sort: "asc",
        width: 200,
      },
    ],
    rows: [
      {
        name: "Tiger",
        surname: "Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320,800",
        extn: 5421,
        email: "t.nixon@datatables.net",
      },
      {
        name: "Garrett",
        surname: "Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170,750",
        extn: 8422,
        email: "q.winters@datatables.net",
      },
      {
        name: "Ashton",
        surname: "Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86,000",
        extn: 1562,
        email: "a.cox@datatables.net",
      },
      {
        name: "Cedric",
        surname: "Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433,060",
        extn: 6224,
        email: "c.kelly@datatables.net",
      },
      {
        name: "Airi",
        surname: "Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162,700",
        extn: 5407,
        email: "a.satou@datatables.net",
      },
      {
        name: "Brielle",
        surname: "Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372,000",
        extn: 4804,
        email: "b.williamson@datatables.net",
      },
    ],
  };

  return (
    <div>
      <TopNav />
      <div className="upper-box">
        <div className="adjust">
          <h5>View Seller</h5>
          <div className="cont">
            <a href="">Seller</a>
            <IoIosArrowForward />
            <a href="">View Seller</a>
            <button className="button-cont">
              CREATE SELLER
              <i>
                <AiOutlinePlus />{" "}
              </i>
            </button>
          </div>
        </div>
      </div>
      <div className="tables">
        <div className="subject">
          <div className="circle">
            <IoIosArrowBack className="icon" />
          </div>
          <h5>Seller List</h5>
          <div className="buts">
            <Button variant="primary">COPY</Button>
            <Button variant="primary">CSV</Button>
            <Button variant="primary">EXCEL</Button>
            <Button variant="primary">PDF</Button>
            <Button variant="primary">PRINT</Button>
          </div>
        </div>
        <div className="tabl">
          <MDBDataTable
            scrollX
            scrollY
            maxHeight="300px"
            striped
            bordered
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default Seller;
