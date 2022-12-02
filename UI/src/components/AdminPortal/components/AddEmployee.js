import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../request.js";
import { ToastContainer, toast } from "react-toastify";
// import LoadingComponent from '../../../CommonComponents/LoadingComponents'

function AddEmployee() {
  let navigate = useNavigate();
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [ContractNumber, setContractNumber] = useState("");
  let [Place, setPlace] = useState("");

  const notify = () => toast("Wow so easy!");

  let handleSubmit = async () => {
    localStorage.setItem(
      "form",
      JSON.stringify({
        name: Name,
        Email: Email,
        ContractNumber,
        Place: Place,
      })
    );
    let formdata = new FormData();
    formdata.append("name", Name);
    formdata.append("Email", Email);
    formdata.append("ContractNumber", ContractNumber);
    formdata.append("Place", Place);

    console.log(formdata);
    let res = await axiosInstance.post("/api/post1//addEmployee", formdata);
    if (res.status === "200") {
      notify();
      sessionStorage.setItem("id", res.data.data._id);
      navigate("/dashboard/allEmployee");
    }
  };

  return (
    <>
      <div className="wrapper">
        <h2 style={{ textAlign: "center", paddingTop: "5px" }}>Addemployee </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name:</label>
              <input
                type="test"
                class="form-control"
                id="Name"
                required
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <br></br>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Email:</label>
              <input
                type="test"
                class="form-control"
                id="dob"
                required
                placeholder="EMAIL"
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <br></br>
            <div class="form-group col-md-6">
              <label for="inputAddress">Contract Number:</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                required
                placeholder="contract number"
                onChange={(e) => {
                  setContractNumber(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <br></br>
            <div class="form-group col-md-6">
              <label for="inputAddress">Place:</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                required
                placeholder="Place"
                onChange={(e) => {
                  setPlace(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Next
          </button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default AddEmployee;
