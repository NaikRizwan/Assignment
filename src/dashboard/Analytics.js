import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
const Analytics = () => {
  // const generateRandomData = () => {
  //   return {
  //     value: Math.floor(Math.random() * 100000),
  //     percentage: `${Math.floor(Math.random() * 100)}%`,
  //   };
  // };

  // // Generate random data for the table
  // const tableData = [...Array(8)].map(() => generateRandomData());

  const generateRandomData = () => {
    return {
      value: Math.floor(Math.random() * 100000),
      percentage: `${Math.floor(Math.random() * 100)}%`,
    };
  };

  const generateRandomValue = () => {
    const values = [
      "/Defect arrival rate",
      "Defect fixed rate",
      "Some other value",
      // Add more values as needed
    ];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  };
  const [tableData] = useState(
    [...Array(8)].map(() => ({
      value: generateRandomValue(),
      data: generateRandomData(),
    }))
  );
  return (
    <>
      <div
        style={{ marginRight: "50px" }}
        className="d-flex justify-content-between"
      >
        {/* Blue Button on the left */}
        <button
          type="button"
          className="btn btn-primary"
          style={{
            borderRadius: "30px",
            border: "1px solid blue",
          }}
        >
          + Create Report
        </button>

        <button
          type="button"
          className="btn btn-light"
          style={{
            borderRadius: "30px",
            border: "1px solid black",
          }}
        >
          Share This Dashboard
        </button>
        <button
          type="button"
          className="btn btn-light"
          style={{
            borderRadius: "30px",
            border: "1px solid black",
          }}
        >
          Selcet Duration
        </button>
        <button
          type="button"
          className="btn btn-light"
          style={{
            borderRadius: "30px",
            border: "1px solid black",
          }}
        >
          Compare With Duration
        </button>
      </div>

      <div className="d-flex justify-content-between ">
        {/* <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            backgroundColor: "#264653",
            backgroundImage:
              "linear-gradient(to bottom, transparent 40%, #264653 40%)",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">Card 1</h5>
            <p className="card-text">12344</p>
            <p className="card-text">2343</p>
          </div>
        </div> */}
        <div className="position-relative">
          {/* Card 1 */}
          <div
            className="card m-2"
            style={{
              width: "207px",
              height: "134px",
              borderRadius: "10px",
              backgroundColor: "#264653",
              backgroundImage:
                "linear-gradient(to bottom, transparent 40%, #264653 40%)",
              position: "relative",
            }}
          >
            <div style={{ color: "white" }} className="card-body">
              <h6>Effiency</h6>
              <p>hello how</p>
              <p style={{ fontFamily: "Arial", fontSize: "16px" }}>11209</p>
              <p>0.00 (12%)</p>
              <p>000USD</p>
            </div>
            {/* SVG with curve line */}
            <svg
              width="207px"
              height="20px"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "1",
              }}
            >
              <path
                d="M 0 10 Q 20 0 30 10 Q 40 20 50 10 Q 60 0 70 10 Q 80 20 90 10 Q 100 0 110 10 Q 120 20 130 10 Q 140 0 150 10 Q 160 20 170 10 Q 180 0 190 10 Q 200 20 210 10"
                fill="none"
                stroke="wheat"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="position-relative">
          {/* Card 1 */}
          <div
            className="card m-2"
            style={{
              width: "207px",
              height: "134px",
              borderRadius: "10px",
              backgroundColor: "#2a9d8f",
              backgroundImage:
                "linear-gradient(to bottom, transparent 30%, #2a9d8f 30%)",
              position: "relative",
            }}
          >
            <div style={{ color: "black" }} className="card-body">
              <h6>Card 1</h6>
              <p>How are you?</p>
              <p style={{ fontFamily: "Arial", fontSize: "16px" }}>123646</p>
              <p>0.00 (12%)</p>
              <p>000USD</p>
            </div>
            {/* SVG with curve line */}
            <svg
              width="207px"
              height="20px"
              style={{
                position: "absolute",
                top: "80%",
                transform: "translateY(-50%)",
                zIndex: "1",
              }}
            >
              <path
                d="M 0 10 Q 20 0 30 10 Q 40 20 50 10 Q 60 0 70 10 Q 80 20 90 10 Q 100 0 110 10 Q 120 20 130 10 Q 140 0 150 10 Q 160 20 170 10 Q 180 0 190 10 Q 200 20 210 10"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="position-relative">
          {/* Card 1 */}
          <div
            className="card m-2"
            style={{
              width: "207px",
              height: "134px",
              borderRadius: "10px",
              backgroundColor: "#e9c46a",
              backgroundImage:
                "linear-gradient(to bottom, transparent 20%, #e9c46a 20%)",
              position: "relative",
            }}
          >
            <div style={{ color: "white" }} className="card-body">
              <h6>Card 1</h6>
              <p>How are you?</p>
              <p style={{ fontFamily: "Arial", fontSize: "16px" }}>123646</p>
              <p>0.00 (12%)</p>
              <p>000USD</p>
            </div>
            {/* SVG with curve line */}
            <svg
              width="207px"
              height="20px"
              style={{
                position: "absolute",
                top: "30%",
                transform: "translateY(-50%)",
                zIndex: "2",
              }}
            >
              <path
                d="M 0 10 Q 20 0 30 10 Q 40 20 50 10 Q 60 0 70 10 Q 80 20 90 10 Q 100 0 110 10 Q 120 20 130 10 Q 140 0 150 10 Q 160 20 170 10 Q 180 0 190 10 Q 200 20 210 10"
                fill="none"
                stroke="blue"
                strokeWidth="5"
              />
            </svg>
          </div>
        </div>
        <div className="position-relative">
          {/* Card 1 */}
          <div
            className="card m-2"
            style={{
              width: "207px",
              height: "134px",
              borderRadius: "10px",
              backgroundColor: "#f4a261",
              backgroundImage:
                "linear-gradient(to bottom, transparent 10%, #f4a261 10%)",
              position: "relative",
            }}
          >
            <div style={{ color: "black" }} className="card-body">
              <h6>Card 1</h6>
              <p>How are you?</p>
              <p style={{ fontFamily: "Arial", fontSize: "16px" }}>123646</p>
              <p>0.00 (12%)</p>
              <p>000USD</p>
            </div>
            {/* SVG with curve line */}
            <svg
              width="207px"
              height="20px"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "1",
              }}
            >
              <path
                d="M 0 10 Q 20 0 30 10 Q 40 20 50 10 Q 60 0 70 10 Q 80 20 90 10 Q 100 0 110 10 Q 120 20 130 10 Q 140 0 150 10 Q 160 20 170 10 Q 180 0 190 10 Q 200 20 210 10"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        {/* <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            backgroundColor: "#2a9d8f",
            backgroundImage:
              "linear-gradient(to bottom, transparent 30%, #2a9d8f 30%)",
          }}
        >
          <div className="card-body">
            <h6>Card 1</h6>
            <p>How are you?</p>
            <p style={{ fontFamily: "Arial", fontSize: "16px" }}>123646</p>
            <p>0.00 (12%)</p>
            <p>000USD</p>
          </div>
        </div> */}
      </div>
      {/* {/* <div className="d-flex justify-content-between">
        <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <polygon
              points="0,40 30,20 60,50 100,30 100,100 0,100"
              fill="#264653"
            ></polygon>
            <polygon
              points="30,80 50,60 80,90 100,70 100,100 0,100"
              fill="#264653"
            ></polygon>
          </svg>
          <div className="card-body">
            <h5 className="card-title">Card 1</h5>
            <p className="card-text">12344</p>
            <p className="card-text">2343</p>
          </div>
        </div>
        <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <polygon
              points="0,50 30,30 60,60 100,40 100,100 0,100"
              fill="#2a9d8f"
            ></polygon>
            <polygon
              points="30,90 50,70 80,100 100,80 100,100 0,100"
              fill="#2a9d8f"
            ></polygon>
          </svg>
          <div className="card-body">
            <h5 className="card-title">Card 2</h5>
            <p className="card-text">12344</p>
            <p className="card-text">2343</p>
          </div>
        </div>
        <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <polygon
              points="0,60 30,40 60,70 100,50 100,100 0,100"
              fill="#e9c46a"
            ></polygon>
            <polygon
              points="30,100 50,80 80,110 100,90 100,100 0,100"
              fill="#e9c46a"
            ></polygon>
          </svg>
          <div className="card-body">
            <h5 className="card-title">Card 3</h5>
            <p className="card-text">12344</p>
            <p className="card-text">2343</p>
          </div>
        </div>
        <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <polygon
              points="0,70 30,50 60,80 100,60 100,100 0,100"
              fill="#f4a261"
            ></polygon>
            <polygon
              points="30,110 50,90 80,120 100,100 100,100 0,100"
              fill="#f4a261"
            ></polygon>
          </svg>
          <div className="card-body">
            <h5 className="card-title">Card 4</h5>
            <p className="card-text">12344</p>
            <p className="card-text">2343</p>
          </div>
        </div>
      </div> 
      <div className="d-flex justify-content-between">
        <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <polygon
              points="0,20 20,10 40,30 60,20 80,40 100,30 100,100 0,100"
              fill="#264653"
            ></polygon>
            <line
              x1="0"
              y1="20"
              x2="100"
              y2="20"
              style={{ stroke: "#fff", strokeWidth: "1" }}
            />
          </svg>
          <div
            className="card-body"
            style={{ position: "relative", zIndex: 1 }}
          >
            <h5 className="card-title" style={{ color: "#264653" }}>
              Card 1
            </h5>
            <p className="card-text" style={{ color: "#264653" }}>
              12344
            </p>
            <p className="card-text" style={{ color: "#264653" }}>
              2343
            </p>
          </div>
        </div>
        <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <polygon
              points="0,10 20,20 40,0 60,10 80,30 100,20 100,100 0,100"
              fill="#2a9d8f"
            ></polygon>
            <line
              x1="0"
              y1="10"
              x2="100"
              y2="10"
              style={{ stroke: "#fff", strokeWidth: "1" }}
            />
          </svg>
          <div
            className="card-body"
            style={{ position: "relative", zIndex: 1 }}
          >
            <h5 className="card-title" style={{ color: "#2a9d8f" }}>
              Card 2
            </h5>
            <p className="card-text" style={{ color: "#2a9d8f" }}>
              12344
            </p>
            <p className="card-text" style={{ color: "#2a9d8f" }}>
              2343
            </p>
          </div>
        </div>
        <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <polygon
              points="0,30 20,40 40,20 60,30 80,10 100,20 100,100 0,100"
              fill="#e9c46a"
            ></polygon>
            <line
              x1="0"
              y1="30"
              x2="100"
              y2="30"
              style={{ stroke: "#fff", strokeWidth: "1" }}
            />
          </svg>
          <div
            className="card-body"
            style={{ position: "relative", zIndex: 1 }}
          >
            <h5 className="card-title" style={{ color: "#e9c46a" }}>
              Card 3
            </h5>
            <p className="card-text" style={{ color: "#e9c46a" }}>
              12344
            </p>
            <p className="card-text" style={{ color: "#e9c46a" }}>
              2343
            </p>
          </div>
        </div>
        <div
          className="card m-2"
          style={{
            width: "207px",
            height: "134px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <polygon
              points="0,40 20,50 40,30 60,40 80,20 100,30 100,100 0,100"
              fill="#f4a261"
            ></polygon>
            <line
              x1="0"
              y1="40"
              x2="100"
              y2="40"
              style={{ stroke: "#fff", strokeWidth: "1" }}
            />
          </svg>
          <div
            className="card-body"
            style={{ position: "relative", zIndex: 1 }}
          >
            <h5 className="card-title" style={{ color: "#f4a261" }}>
              Card 4
            </h5>
            <p className="card-text" style={{ color: "#f4a261" }}>
              12344
            </p>
            <p className="card-text" style={{ color: "#f4a261" }}>
              2343
            </p>
          </div>
        </div>
      </div> */}

      <div className="d-flex justify-content-between">
        <div
          className="card m-2"
          style={{
            width: "289.63px",
            height: "193.45px",
            borderRadius: "10px",
          }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">On Time</h5>
              <p className="card-text">
                <FaRegCircle
                  style={{
                    color: "green",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                />
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">Complete iterations</p>
              <p className="card-text">15</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">Toatal iterations</p>
              <p className="card-text">8</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">% iterations Done</p>
              <p className="card-text">78%</p>
            </div>
          </div>
        </div>
        <div
          className="card m-2"
          style={{
            width: "289.63px",
            height: "193.45px",
            borderRadius: "10px",
          }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">On Time</h5>
              <p className="card-text">
                <FaRegCircle
                  style={{
                    color: "green",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                />
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">Delayed</p>
              <p className="card-text">15</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">Cancelled</p>
              <p className="card-text">8</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text"> % Total</p>
              <p className="card-text">78 %</p>
            </div>
          </div>
        </div>
        <div
          className="card m-2"
          style={{
            width: "289.63px",
            height: "193.45px",
            borderRadius: "10px",
          }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">On Time</h5>
              <p className="card-text">
                <FaRegCircle
                  style={{
                    color: "red",
                    backgroundColor: "red",
                    borderRadius: "50%",
                  }}
                />
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">Delayed</p>
              <p className="card-text">15</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">Cancelled</p>
              <p className="card-text">8</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text"> %Total</p>
              <p className="card-text">78 %</p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Page 1</th>
              <th colSpan="6" className="text-right">
                <div className="d-flex justify-content-end">
                  {[...Array(6)].map((_, index) => (
                    <button
                      key={index}
                      className="btn btn-primary mr-2"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid",
                        color: "black",
                        borderRadius: "0",
                        borderColor: "whitesmoke",
                      }}
                    >
                      Button {index + 1}
                    </button>
                  ))}
                </div>
              </th>
            </tr>
            <tr>
              <th>Page</th>
              <th></th>
              <th></th>
              <th>R1</th>
              <th>R2</th>
              <th>R3</th>
              <th>R4</th>
              <th>R5</th>
              <th>R6</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.value}</td>
                <td></td>
                <td></td>
                {[...Array(6)].map((_, index) => (
                  <td key={index}>
                    {row.data.value} ({row.data.percentage})
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Page 1</th>
              <th colSpan="6" className="text-right">
                <div
                  className="d-flex justify-content-end"
                  style={{ paddingRight: "5%" }}
                >
                  <button
                    className="btn btn-primary mr-2"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid",
                      color: "black",
                      borderRadius: "0",
                      borderColor: "whitesmoke",
                    }}
                  >
                    Today
                  </button>
                  <button
                    className="btn btn-primary mr-2"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid",
                      color: "black",
                      borderRadius: "0",
                      borderColor: "whitesmoke",
                    }}
                  >
                    Yesterday
                  </button>
                  <button
                    className="btn btn-primary mr-2"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid",
                      color: "black",
                      borderRadius: "0",
                      borderColor: "whitesmoke",
                    }}
                  >
                    Week
                  </button>
                  <button
                    className="btn btn-primary mr-2"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid",
                      color: "black",
                      borderRadius: "0",
                      borderColor: "whitesmoke",
                    }}
                  >
                    Year
                  </button>
                  <button
                    className="btn btn-primary mr-2"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid",
                      color: "black",
                      borderRadius: "0",
                      borderColor: "whitesmoke",
                    }}
                  >
                    Quarter
                  </button>
                  <button
                    className="btn btn-primary mr-2"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid",
                      color: "black",
                      borderRadius: "0",
                      borderColor: "whitesmoke",
                    }}
                  >
                    Select Period
                  </button>
                </div>
              </th>
            </tr>
            <tr>
              <th>Page</th>
              <th></th>
              <th></th>
              <th>
                Page Veiws
                <br /> 746723
              </th>
              <th>
                {" "}
                unique Page Veiws
                <br /> 746723
              </th>
              <th>
                {" "}
                Avg Veiws
                <br /> 746723
              </th>
              <th>
                {" "}
                Extrance
                <br /> 746723
              </th>
              <th>
                {" "}
                % Exit
                <br /> 746723
              </th>
              <th>
                {" "}
                Page Value
                <br /> 746723
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.value}</td>
                <td></td>
                <td></td>
                {[...Array(6)].map((_, index) => (
                  <td key={index}>
                    {row.data.value} ({row.data.percentage})
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
