import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  let navigate = useNavigate();
  let CREDENTIALS = {
    admin: "admin@1123",
    pass: "admin@123",
  };

  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");

  let handleSubmit = async () => {
    console.log(email, CREDENTIALS.admin, password, CREDENTIALS.pass);
    if (email === CREDENTIALS.admin && password === CREDENTIALS.pass) {
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/dashboard");
    } else {
      toast.error("invalid credintioal !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className="wrapper">
      <h2 className="mt-4" style={{ textAlign: "center", paddingTop: "5px" }}>
        Login to Have Access{" "}
      </h2>
      <div>
        <Form className="Displayflex aligncenter Flexcolumn">
          <Form.Group className="col-md-4 mt-5">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="col-md-4 mt-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <div className="mt-5 mb-3" style={{ textAlign: "center" }}>
            <Button
              className="mainbtn"
              variant="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
