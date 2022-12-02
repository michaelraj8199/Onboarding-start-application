import React from "react";
import Thankyou_image from "../../Assets/thankyou_svg.svg";
import TheecodeLogo from "../../Assets/Theecode.svg";

function Thankpage() {
  return (
    <>
      <div>
        <div className="container-fluid Stepform ">
          <div classname="row">
            <div classname="col-md-12 pe-4 pt-2 pb-4">
              <img src={TheecodeLogo} alt="TheecodeLogo" />
            </div>

            <div classname="col-md-12 text-center fs28 text-white">
              ONBOARDING APPLICATION
            </div>
          </div>

          <div classname="pt-3 pb-3">
            <div className=" justifycenter Aligncenter DisplayFlex">
              <div className="step  flexcolumn DisplayFlex Aligncenter">
                <div className=" stepcompleted">&#10003;</div>
                <div className="fs18 mt-3 textblack textgreen">
                  Personal Details
                </div>
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
                <div className=" step_processing">&#10003;</div>
                <div className="fs18 mt-3 textgreen">Work Experience</div>
              </div>
              <div className=" DisplayFlex justifycenter">
                <div className=" stepline_active"></div>
              </div>
              <div className="step  flexcolumn DisplayFlex Aligncenter">
                <div className="step_processing">4</div>
                <div className="fs18 mt-3 text-white">Thank You</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center DisplayFlex justifycenter ">
          <div className="bg-white thankpage">
            <div className="DisplayFlex flexcolumn aligncenter mt-4">
              <div className="mt-4 ">
                <img width="300px" src={Thankyou_image} alt="Thankyou_image" />
              </div>
              <div className="textblack fs32 mt-5">
                Thanks you are awesome!!!
              </div>
              <div className="  pl-3 mt-3 pr-3 textblack ">
                We are incredibly excited to have you here. You've been added to
                our list of awesome people at
              </div>
              <div className="mb-4 mt-2 textgreen">"THEECODE THE FUTURIST"</div>
            </div>

            <div>
              <button className="mainbtn mt-4">
                <a href="/">Close</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thankpage;
