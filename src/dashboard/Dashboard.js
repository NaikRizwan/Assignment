import React, { useState } from "react";

import styled from "styled-components";

import { FiLogOut } from "react-icons/fi";

// import { CgProfile } from "react-icons/cg";

import { FaHome } from "react-icons/fa";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import Home from "./Home";
import Analytics from "./Analytics";

import { PiCube } from "react-icons/pi";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { TbTransformFilled } from "react-icons/tb";
import { IoLibrary } from "react-icons/io5";
const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500");
  * {
    margin: 0;
    list-style: none;
    text-decoration: none;
  }
  body {
    font-family: "Roboto", sans-serif;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 314px;
    // padding-right: 0px;
    background: dodgerblue;
    border-radius: 20px;
    margin-left: 19px;
    margin-top: 17px;
    padding-top: 10px;
    // padding: 17px;
    // padding-bottom: 40px;

    height: 100vh;
    transition: all 0.5s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .sidebar ul {
    padding: 0;
    margin: 0;
  }

  .sidebar ul li {
    display: flex;
    justify-content: flex-start;
  }
  .sidebar ul button {
    width: 100%;
    /* line-height: 65px; */
    font-size: 20px;
    color: white;
    font-weight: bold;
    background-color: dodgerblue;

    box-sizing: border-box;

    padding: 11px;
    margin-top: 8px;
    border: none;
    border-radius: 5px;

    transition: all 0.3s ease;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
  }

  .cont {
    display: flex;
  }

  .sidebar ul button:hover {
    background-color: #06506b;
    color: #fff;
  }

  .profile-container {
    // padding: 20px;
    //border-radius: 10px;
    //  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    // margin: 20px;
    margin-top: 10px;
    margin-left: 32px;

    width: 100%;
    // background-color: #f8f9fa;
  }
`;

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Home />);

  const handleComponentChange = (componentName) => {
    switch (componentName) {
      case "Analytics":
        setSelectedComponent(<Analytics />);
        break;
      //   case "DeleteTripForm":
      //     setSelectedComponent(<DeleteTripForm />);
      //     break;
      case "Home":
        setSelectedComponent(<Home />);
        break;
      //   case "DeleteSingleTripForm":
      //     setSelectedComponent(<DeleteSingleTripForm />);
      //     break;
      //   case "AdminLogin":
      //     setSelectedComponent(<AdminLogin />);
      //  break;
      // case "Chartdashboard":
      //   setSelectedComponent(<Chartdashboard />);
      //   break;
      //   case "AdminDashboardProfile":
      //     setSelectedComponent(<AdminDashboardProfile />);
      //     break;
      //   case "NotificationPage":
      //     setSelectedComponent(<NotificationPage />);
      //     break;
      //   case "FeedbackPage":
      //     setSelectedComponent(<FeedbackPage />);
      //     break;
      // Add cases for other components if needed
      default:
        setSelectedComponent(null);
    }
  };
  return (
    <Wrapper style={{ backgroundColor: "whitesmoke" }}>
      <div className="cont">
        <div class="sidebar">
          <ul>
            <li>
              <button style={{ marginLeft: "113px" }}>
                <FaChevronCircleLeft />
              </button>
            </li>
            <li>
              <button style={{ fontSize: "27px" }}>
                <PiCube /> &nbsp; Catlix
              </button>
            </li>
            <li>
              <button onClick={() => handleComponentChange("Home")}>
                <FaHome /> &nbsp; Home
              </button>
            </li>
            <li>
              <button onClick={() => handleComponentChange("Home")}>
                <FaClockRotateLeft /> &nbsp; Actitivies
              </button>
            </li>
            <li>
              <button onClick={() => handleComponentChange("Analytics")}>
                <SiSimpleanalytics /> &nbsp; Analytics
              </button>
            </li>
            {/*
            <li>
              <button onClick={() => handleComponentChange("Chartdashboard")}>
                <SiSimpleanalytics /> &nbsp; Analayitcs
              </button>
            </li> */}
            <li>
              <button onClick={() => handleComponentChange("AdminLogin")}>
                <TbTransformFilled /> &nbsp; Tramsformation
              </button>
            </li>
            <li>
              <button
                onClick={() => handleComponentChange("DeleteSingleTripForm")}
              >
                <IoLibrary /> &nbsp; Libirary
              </button>
            </li>{" "}
            {/*
            <li>
              <button
                onClick={() => handleComponentChange("AdminDashboardProfile")}
              >
                <MdLocalOffer /> &nbsp; Offers
              </button>
            </li> */}
            <hr
              style={{
                marginTop: "40px",
                color: "white",
                paddingRight: "17px",
                marginRight: "17px",
              }}
            ></hr>
            <li>
              <button onClick={() => handleComponentChange("FeedbackPage")}>
                <CiSettings /> &nbsp; Setting
              </button>
            </li>
            <li>
              <button onClick={() => handleComponentChange("ProductForm")}>
                <FiLogOut /> &nbsp; Logout
              </button>
            </li>
            :
          </ul>
        </div>
        <div className="profile-container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/* Left side: Search input */}
                <div className="col-6">
                  <form className="form-inline my-2 my-lg-0">
                    <div className="input-group" style={{ width: "500px" }}>
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                  </form>
                </div>

                {/* Right side: Icons */}
                <div className="col-6 d-flex justify-content-end">
                  <ul
                    className="navbar-nav ml-auto"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <li className="nav-item">
                      <a className="nav-link" href="rr">
                        <IoNotificationsCircleSharp
                          style={{ fontSize: "24px" }}
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="rr">
                        <FaMessage style={{ fontSize: "24px" }} />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="rr">
                        <CiSettings style={{ fontSize: "24px" }} />
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="rr">
                        <CgProfile style={{ fontSize: "24px" }} />
                      </a>
                    </li> */}
                    <li>
                      <img
                        src="data:image/jpeg;base64,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"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        alt="rr"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {selectedComponent}{" "}
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
