import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../request";

function AllEmployee() {
  let [employee, setemployee] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  onclick = () => {};
  let deleteProd = async (id) => {
    let newEmp = employee.filter((e) => id !== e._id);
    setemployee(newEmp);
    return await axiosInstance.delete("/api/post1/employee/" + id);
  };

  let sendmail = async (id) => {
    let sendmail = await axiosInstance.get("/api/post1/sendmail/" + id);
    console.log(sendmail);
    return sendmail;
  };

  let getData = async () => {
    let res = await axiosInstance.get("/api/post1/");

    setemployee(res.data);
  };

  return (
    <>
      {
        <Table
          striped
          bordered
          hover
          className="text-light fw-normal"
          variant="dark"
        >
          <thead>
            <tr>
              <th>Sl.No</th>
              <th> Name</th>
              <th>Email</th>
              <th>Contract Number</th>
              <th>Place</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Mail</th>
            </tr>
          </thead>
          <tbody>
            {employee &&
              employee.map((data, i) => (
                <tr key={data._id}>
                  <td>{i + 1}</td>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.ContractNumber}</td>
                  <td>{data.Place}</td>
                  <td>
                    <Link to={`/dashboard/${data._id}`}>
                      <Button className="btn btn-primary">Update</Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      className="btn btn-danger"
                      onClick={() => deleteProd(data._id)}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn btn-primary"
                      onClick={() => sendmail(data._id)}
                    >
                      send mail
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      }
    </>
  );
}

export default AllEmployee;
