import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TheecodeLogo from "../../Assets/Theecode.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Personaldetails() {
  // let formstage = "personaldetails";
  let navigate = useNavigate();
  // let [isLoading,setIsLoading] = useState(false)
  const [data, setData] = useState({
    name: "",
    DOB: "",
    ContractNumber: "",
    AlternateNumber: "",
    Permanentaddress: "",
    temporaryaddress: "",
  });

  const handelForsubmit = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let formdata = new FormData();
  formdata.append("name", data.name);
  formdata.append("DOB", data.DOB);
  formdata.append("ContractNumber", data.ContractNumber);
  formdata.append("AlternateNumber", data.AlternateNumber);
  formdata.append("Permanentaddress", data.Permanentaddress);
  formdata.append("temporaryaddress", data.temporaryaddress);

  const api = async () => {
    await axios
      .post("http://localhost:5000/api/post/personaldetails", formdata)
      .then((res) => {
        sessionStorage.setItem("id", res.data.data._id);
        toast.success("Successful!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/identity");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Pls fill details", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <>
      <div>
        <div class="container-fluid Stepform  ">
          <div class="row">
            <div class="col-md-12 pe-4 pt-2 pb-4">
              <img src={TheecodeLogo} />
            </div>

            <div class="col-md-12 text-center fs28 text-white">
              ONBOARDING APPLICATION
            </div>
          </div>

          <div class="pt-3 pb-3">
            <div class=" justifycenter Aligncenter DisplayFlex">
              <div class="step  flexcolumn DisplayFlex Aligncenter">
                <div class="step_processing">1</div>
                <div class="fs18 mt-3 text-white">Personal Details</div>
              </div>
              <div class=" DisplayFlex justifycenter">
                <div class="stepline_active"></div>
              </div>

              <div class="step  flexcolumn DisplayFlex Aligncenter">
                <div class="step_upcoming">2</div>
                <div class="fs18 mt-3 text-white">Identity</div>
              </div>
              <div class=" DisplayFlex justifycenter">
                <div class="stepline_active stepline_inactive"></div>
              </div>
              <div class="  step flexcolumn DisplayFlex Aligncenter ">
                <div class="step_inactive">3</div>
                <div class="fs18 mt-3 text-white">Work Experience</div>
              </div>
              <div class=" DisplayFlex justifycenter">
                <div class="stepline_active stepline_inactive"></div>
              </div>
              <div class="step  flexcolumn DisplayFlex Aligncenter">
                <div class="step_inactive">4</div>
                <div class="fs18 mt-3 text-white">Thank You</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container container mt-4">
          <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
            Personal Details{" "}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div class="form-row p20">
              <div className="col-md-6">
                <div className="row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Name:</label>
                    <input
                      type="Name"
                      class="form-control"
                      name="name"
                      value={data.name}
                      required
                      placeholder="Name"
                      onChange={handelForsubmit}
                    />
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputPassword4">DOB:</label>
                    <input
                      type="date"
                      class="form-control"
                      name="DOB"
                      value={data.DOB}
                      required
                      placeholder="DOB"
                      onChange={handelForsubmit}
                    />
                  </div>
                </div>
              </div>

              <div class="form-group col-md-6">
                <label for="inputAddress">Contact Number:</label>
                <input
                  type="text"
                  value={data.ContractNumber}
                  class="form-control"
                  name="ContractNumber"
                  required
                  placeholder="Contact Number"
                  onChange={handelForsubmit}
                />
              </div>

              <div class="form-group col-md-6">
                <label for="inputAddress">Alternative Number:</label>
                <input
                  type="text"
                  class="form-control"
                  name="AlternateNumber"
                  value={data.AlternateNumber}
                  required
                  placeholder="Alternative Number"
                  onChange={handelForsubmit}
                />
              </div>

              <div class="form-group col-md-6">
                <label for="inputAddress1">Permanent Address:</label>
                <input
                  type="text"
                  class="form-control"
                  name="Permanentaddress"
                  value={data.Permanentaddress}
                  required
                  placeholder="Apartment, studio, or floor"
                  onChange={handelForsubmit}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress2">Temporary Address:</label>
                <input
                  type="text"
                  class="form-control"
                  name="temporaryaddress"
                  value={data.temporaryaddress}
                  required
                  placeholder="Apartment, studio, or floor"
                  onChange={handelForsubmit}
                />
              </div>
              <div class="col-md-6">
                <div class="form-check ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label m-0" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button class="mainbtn mt-4" type="submit" onClick={api}>
                Next
              </button>
            </div>
          </form>
        </div>
        {/* <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /> */}
        <ToastContainer />
      </div>
    </>
  );
}

export default Personaldetails;
