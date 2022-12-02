import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { axiosInstance } from "../../../request";

function EditEmployee() {
  
  let [employee, setemployee] = useState([]);

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [place, setplace] = useState("");

  let id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  //using axios method
  let getData = async () => {
    console.log(id);
    let res = await axiosInstance.get(`/api/post1/${id}`);
    setName(res.data.Name);
    setEmail(res.data.Email);
    setMobile(res.data.ContractNumber);
    setplace(res.data.Place);

    setemployee(res.data);
  };

  let handleSubmit = async (e) => {
    setemployee({ [e.target.name]: e.target.value });
    let data = {
      name: name,
      email: email,
      mobile: mobile,
      place: place,
    };
    let res = await axiosInstance.put(`/api/post1/employee/${id}`, data);
    if (res.status === "200") {
      sessionStorage.setItem("id", res.data.data._id);
      navigate("/dashboard/allEmployee");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* {isLoading?<LoadingComponent/>:<></>} */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            value={mobile}
            type="text"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Place</Form.Label>
          <Form.Control
            value={place}
            type="text"
            placeholder="place"
            onChange={(e) => setplace(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </>
  );
}

export default EditEmployee;
