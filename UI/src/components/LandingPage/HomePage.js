// import axios from "axios";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { axiosInstance } from "../../request";
import TheecodeLogo from "../../Assets/Theecode.svg";
import Joinus_image from "../../Assets/joinus_svg.svg";
import { Audio } from "react-loader-spinner";
const HomePage = () => {
  let res = axiosInstance.get("/api/get/");
  let [loading, setloading] = useState(false);

  return (
    <div className="container text-center DisplayFlex justifycenter ">
      <div className="bg-white homepage">
        <div className="DisplayFlex m-3">
          <img width="100px" src={TheecodeLogo} />
        </div>
        <div className="DisplayFlex flexcolumn aligncenter textgrey">
          <div className="fs32 mt-4 fw600 textdarkgrey">WELCOME ABOARD !!!</div>
          <div className="border_btm"></div>
        </div>
        <div className="mt-3">
          <img width="300px" src={Joinus_image} />
        </div>
        <div>
          <button className="mainbtn mt-5">
            <a href="/personaldetails">JOIN US</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
