import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TheecodeLogo from "../../Assets/Theecode.svg";
import AWS from "aws-sdk";

function WorkExperience() {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  let navigate = useNavigate();
  const [data, setData] = useState({
    previousorganizationdocumnets: "",
    bankstatement: "",
  });
  let identiy = JSON.parse(localStorage.getItem("form"));

  console.log(identiy);

  let formdata = new FormData();
  formdata.append(
    "previousorganizationdocumnets",
    data.previousorganizationdocumnets
  );
  formdata.append("bankstatement", data.bankstatement);

  data.id = sessionStorage.getItem("id");
  const handelfilesubmit = (e) => {
    const { name, files } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
    console.log(data);
  };
  const api = async () => {
    await axios
      .post("http://localhost:5000/api/post/workexperience", data)
      .then((res) => {
        console.log("VALUE", res);
      });
    navigate("/");
  };

  return (
    <div>
      <div className="container-fluid Stepform ">
        <div className="row">
          <div className="col-md-12 pe-4 pt-2 pb-4">
            <img src={TheecodeLogo} alt="TheecodeLogo" />
          </div>

          <div className="col-md-12 text-center fs28 text-white">
            ONBOARDING APPLICATION
          </div>
        </div>

        <div className="pt-3 pb-3">
          <div className=" justifycenter Aligncenter DisplayFlex">
            <div className="step  flexcolumn DisplayFlex Aligncenter">
              <div className=" stepcompleted">&#10003;</div>
              <div className="fs18 mt-3  textgreen">Personal Details</div>
            </div>
            <div className=" DisplayFlex justifycenter">
              <div className="stepline_active"></div>
            </div>

            <div className="step  flexcolumn DisplayFlex Aligncenter">
              <div className="step_processing stepcompleted">&#10003;</div>
              <div className="fs18 mt-3  textgreen">Identity</div>
            </div>
            <div className=" DisplayFlex justifycenter">
              <div className=" stepline_active"></div>
            </div>
            <div className="  step flexcolumn DisplayFlex Aligncenter ">
              <div className=" step_processing">3</div>
              <div className="fs18 mt-3 text-white">Work Experience</div>
            </div>
            <div className=" DisplayFlex justifycenter">
              <div className=" stepline_active"></div>
            </div>
            <div className="step  flexcolumn DisplayFlex Aligncenter">
              <div className="step_upcoming">4</div>
              <div className="fs18 mt-3 text-white">Thank You</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p20 container mt-4">
        <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
          Work Experience{" "}
        </h2>
        <form
          className="Workdetails"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-row">
            <div className="col-md-12">
              <div className="row alignend justifycenter">
                <div className="col-md-6 pr-0 ">
                  <label for="pan number">
                    Previous Organization Document:
                  </label>

                  <select
                    classname="form-control Upload_field"
                    id="Document"
                    required
                    onChange={(E) => {
                      setData({
                        ...data,
                        previousorganizationdocumnets: E.target.value,
                      });
                    }}
                  >
                    <option value="month pay slip">3 Month Pay slip</option>
                    <option value="offer letter">offer letter</option>
                    <option value="releiving">relieving letter</option>
                  </select>
                </div>

                <div className="col-md-2 pl-0">
                  <div classname="file btn  upload">
                    <div className="upload_btn">+ Upload</div>
                    <input
                      type="file"
                      accept="application/pdf,application/vnd.ms-excel"
                      name="offerletter"
                      id="myfile"
                      onChange={handelfilesubmit}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row justifycenter alignend">
                <div className="col-md-6 pr-0">
                  <label for="Bank Statment"> Bank Statment :</label>

                  <select
                    classname="form-control Upload_field"
                    id="Document"
                    required
                    onChange={(E) => {
                      setData({
                        ...data,
                        bankstatement: E.target.value,
                      });
                      console.log(E.target.value);
                    }}
                  >
                    <option value="lest than 6th months">
                      Less than 6th months
                    </option>
                    <option value="more than 6th months">
                      More than 6th months
                    </option>
                    <option value="freshers">freshers</option>
                  </select>
                </div>
                <div className="col-md-2 pl-0">
                  <div classname="file btn  upload">
                    <div className="upload_btn">+ Upload</div>
                    <input
                      type="file"
                      id="myfile"
                      name="bank"
                      accept="application/pdf,application/vnd.ms-excel"
                      onChange={handelfilesubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="mainbtn mt-4" type="submit" onClick={api}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default WorkExperience;
