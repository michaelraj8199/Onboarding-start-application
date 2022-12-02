import React, { useState } from "react";
import { axiosInstance } from "../../request";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TheecodeLogo from "../../Assets/Theecode.svg";
import AWS from "aws-sdk";

// import ImageUpload from "./uploadImage";

function Identity() {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  let navigate = useNavigate();
  const [data, setData] = useState({
    aadharNumber: "",
    panNumber: "",
    aadharImage: "",
    panImage: "",
    bloodgroup: "",
    educationaldetails1: "",
    educationaldetails2: "",
    educationaldetails3: "",
    educationaldetails4: "",
    educationaldetails1Image: "",
    educationaldetails2Image: "",
    educationaldetails3Image: "",
    educationaldetails4Image: "",
  });

  let formdata = new FormData();
  formdata.append("aadharNumber", data.aadharNumber);
  formdata.append("panNumber", data.panNumber);
  formdata.append("aadharImage", data.aadharImage);
  formdata.append("panImage", data.panImage);
  formdata.append("bloodgroup", data.bloodgroup);
  formdata.append("educationaldetails1", data.educationaldetails1);
  formdata.append("educationaldetails2", data.educationaldetails2);
  formdata.append("educationaldetails3", data.educationaldetails3);
  formdata.append("educationaldetails4", data.educationaldetails4);
  formdata.append("educationaldetails1Image", data.educationaldetails1Image);
  formdata.append("educationaldetails2Image", data.educationaldetails2Image);
  formdata.append("educationaldetails3Image", data.educationaldetails3Image);
  formdata.append("educationaldetails4Image", data.educationaldetails4Image);
  formdata.append("id", sessionStorage.getItem("id"));

  let res = axiosInstance.post("/api/post/identity", formdata);
  if (res.status === "200") {
    navigate("/workexperience");
  }

  const handelForsubmit = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
      .post("http://localhost:5000/api/post/identity", formdata)
      .then((res) => {
        console.log("VALUE", res);
      });
    navigate("/workexperience");
  };
  return (
    <div>
      <div class="container-fluid Stepform ">
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
              <div class=" stepcompleted">&#10003;</div>
              <div class="fs18 mt-3  textgreen">Personal Details</div>
            </div>
            <div class=" DisplayFlex justifycenter">
              <div class="stepline_active"></div>
            </div>

            <div class="step  flexcolumn DisplayFlex Aligncenter">
              <div class="step_processing">2</div>
              <div class="fs18 mt-3 text-white">Identity</div>
            </div>
            <div class=" DisplayFlex justifycenter">
              <div class=" stepline_active"></div>
            </div>
            <div class="  step flexcolumn DisplayFlex Aligncenter ">
              <div class="step_upcoming">3</div>
              <div class="fs18 mt-3 text-white">Work Experience</div>
            </div>
            <div class=" DisplayFlex justifycenter">
              <div class=" stepline_inactive"></div>
            </div>
            <div class="step  flexcolumn DisplayFlex Aligncenter">
              <div class="step_inactive">4</div>
              <div class="fs18 mt-3 text-white">Thank You</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mt-4 ">
        <h2 style={{ textAlign: "center", paddingTop: "5px" }}>Identity</h2>
        <form
          class="form-row"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div class="form-row ">
            <div className="col-md-12">
              <div className="row justifycenter alignend ">
                <div className="col-md-6 pr-0">
                  <label for="pan number"> Enter Aadhar card:</label>
                  <input
                    class="form-control Upload_field"
                    type="text"
                    id=" number"
                    name="aadharNumber"
                    onChange={handelForsubmit}
                    required
                  ></input>
                </div>

                <div className="col-md-3 pl-0 ">
                  <div class="file btn  upload">
                    <div className="upload_btn"> + Upload</div>
                    <input
                      type="file"
                      id="myfile"
                      accept="image/png, image/jpg, image/jpeg"
                      name="aadharImage"
                      onChange={handelfilesubmit}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row justifycenter alignend">
                <div className="col-md-6 pr-0">
                  <label for="pan number"> Enter PAN Number:</label>
                  <input
                    class="form-control Upload_field"
                    type="text"
                    id="panNumber"
                    required
                    name="panNumber"
                    onChange={handelForsubmit}
                  ></input>
                </div>
                <div className="col-md-3 pl-0">
                  <div class="file btn  upload">
                    <div className="upload_btn">+ Upload</div>
                    {/* /* className: uploaded tick code: &#10003; font change to :Uploaded */}
                    <input
                      type="file"
                      id="myfile"
                      name="panImage"
                      onChange={handelfilesubmit}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row justifycenter">
                <div className="col-md-9">
                  <label for="Blood Group">Blood Group:</label>

                  <select
                    class="form-control"
                    id="Blood Group"
                    name="bloodgroup"
                    required
                    onChange={handelForsubmit}
                  >
                    <option selected value="">
                      Please Select A Blood Group
                    </option>
                    <option value="A+">A+</option>
                    <option value="o+">O+</option>
                    <option value="B+">B+</option>
                    <option value="AB">AB+</option>
                    <option value="A-">A-</option>
                    <option value="O-">O-</option>
                    <option value="B-">B-</option>
                    <option value="AB">AB-</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row alignend justifycenter">
                <div className="col-md-6 pr-0 ">
                  <label for="Educational Details">10th Percentage :</label>
                  <input
                    class="form-control Upload_field"
                    type="text"
                    id="Educational Details"
                    name="educationaldetails1"
                    required
                    onChange={handelForsubmit}
                  ></input>
                </div>
                <div className="col-md-3 pl-0">
                  <div class="file btn  upload">
                    <div className="upload_btn">+ Upload</div>
                    <input
                      type="file"
                      id="myfile"
                      accept="image/png, image/jpg, image/jpeg"
                      name="educationaldetails1image"
                      onChange={handelfilesubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row justifycenter alignend">
                <div className="col-md-6 pr-0">
                  <label for="Educational Details">12th Percentage:</label>

                  <input
                    type="text"
                    class="form-control Upload_field"
                    id="Educational Details"
                    name="educationaldetails2"
                    required
                    onChange={handelForsubmit}
                  ></input>
                </div>
                <div className="col-md-3 pl-0">
                  <div class="file btn  upload">
                    <div className="upload_btn">+ Upload</div>
                    <input
                      type="file"
                      id="myfile"
                      accept="image/png, image/jpg, image/jpeg"
                      name="educationaldetails2image"
                      onChange={handelfilesubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row alignend justifycenter">
                <div className="col-md-6 pr-0 ">
                  <label for="Educational Details">UG grade:</label>

                  <input
                    type="text"
                    class="form-control Upload_field"
                    id="Educational Details"
                    required
                    name="educationaldetails3"
                    onChange={handelForsubmit}
                  ></input>
                </div>
                <div className="col-md-3 pl-0">
                  <div class="file btn  upload">
                    <div className="upload_btn">+ Upload</div>
                    <input
                      type="file"
                      id="myfile"
                      name="educationaldetails3image"
                      onChange={handelfilesubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row alignend justifycenter">
                <div className="col-md-6 pr-0">
                  <label for="Educational Details">PG grade :</label>

                  <input
                    type="text"
                    class="form-control Upload_field"
                    id="Educational Details"
                    name="educationaldetails4"
                    required
                    onChange={handelForsubmit}
                  ></input>
                </div>
                <div className="col-md-3 pl-0">
                  <div class="file btn  upload">
                    <div className="upload_btn">+ Upload</div>
                    <input
                      type="file"
                      accept="image/png, image/jpg, image/jpeg"
                      id="myfile"
                      name="educationaldetails4image"
                      onChange={handelfilesubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="mainbtn mt-4 mb-3" type="submit" onClick={api}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Identity;
