import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import LoadingComponent from '../../../CommonComponents/LoadingComponents'
import { Link } from "react-router-dom";

import logo from "../../../Assets/Theecode.svg";
import logoout from "../../../Assets/log-out.svg";
import dashboardicon from "../../../Assets/Dashboard_icon.svg";
import employeeicon from "../../../Assets/employee_icon.svg";
import employeeedit from "../../../Assets/employee_edit.svg";
import employeeadd from "../../../Assets/employee_add.svg";
import employeeall from "../../../Assets/Allemployee_icon.svg";
import allemploycardico from "../../../Assets/allemploy_cardico.svg";
import addemploycardico from "../../../Assets/addemploy_cardico.svg";
import editemploycardico from "../../../Assets/editemploy_cardico.svg";

function Dashboard() {
  let navigate = useNavigate();

  let logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div classname="container admin-wrapper width100_mob ">
        <header className="width100_mob">
          <div className="DisplayFlex p-3 SpaceBetween width100_mob">
            <div className=" ">
              <img classname="w_150" src={logo} alt="logo" />
            </div>
            <div className="DisplayFlex aligncenter ">
              <div className="fs16px ">
                <button className="logoutbtn" onClick={() => logout()}>Logout </button>
              </div>

              <img className=" ms-2" width="20px" src={logoout} alt="logoout" />
            </div>
          </div>
        </header>
        <div className="DisplayFlex ">
          <div className="side-wrapper width_20 ">
            <div className="DisplayFlex aligncenter cursorptr wrapper_content side-wrapper_active">
              <img src={dashboardicon} alt="dashboardicon" />

              <div className="ms-2 textnone blackClr">Dashboard</div>
            </div>
            <div
              className="accordion accordion-flush width100_mob"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <div>
                      <img src={employeeicon} alt="employeeicon" />
                    </div>
                    <div className="ms-2 textnone blackClr">Employee</div>
                  </button>
                </h2>

                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body DisplayFlex aligncenter">
                    <img
                      className="ms-4"
                      width="20px"
                      src={employeeadd}
                      alt="employeeadd"
                    />

                    <div className="ms-2 ">
                      <a href="/allemployee" className="blackClr">Add Employee</a>
                    </div>
                  </div>
                </div>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body DisplayFlex aligncenter">
                    <img
                      className="ms-4"
                      width="20px"
                      src={employeeedit}
                      alt="employeeedit"
                    />

                    <div className="ms-2 textnone blackClr">Edit Employee</div>
                  </div>
                </div>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body DisplayFlex aligncenter">
                    <img
                      className="ms-4"
                      width="20px"
                      src={employeeall}
                      alt="employeeall"
                    />

                    <div className="ms-2 textnone blackClr">All Employees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="white_wrapper width_80 bg_white ">
            <div className="dashboard_bg DisplayFlex flexwrap ">
              <div className="dashboard_card  cursorptr">
                <div className=" fs16px">All Employees</div>

                <div className="DisplayFlex  spaceEnd">
                  <img
                    width="80px"
                    src={allemploycardico}
                    alt="allemploycardico"
                  />
                </div>
              </div>
              <div className="dashboard_card green_bg cursorptr">
                <div className=" fs16px">Add Employee</div>
                <div className="DisplayFlex  spaceEnd">
                  <img
                    width="75px"
                    src={addemploycardico}
                    alt="addemploycardico"
                  />
                </div>
              </div>
              <div className="dashboard_card yellow_bg cursorptr">
                <div className=" fs16px">Edit Employee</div>
                <div className="DisplayFlex  spaceEnd">
                  <img
                    width="70px"
                    src={editemploycardico}
                    alt="editemploycardico"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
