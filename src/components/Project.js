import React, { useState } from "react";
import Data from "../db/Data";
import Footer from "./Footer";
const Project = () => {
  const [getData, setData] = useState(Data);

  console.log(getData);

  return (
    <>
      <div className="project-section">
        <h4 className="sec-title">Projects portfolio</h4>

        <input placeholder="Search Projects" className="searchbar" />

        <div className="row" style={{ gap: "39px", width: "100%" }}>
          {getData.map((data, i) => (
            <div className="card col-3" style={{ width: "31%" }} key={i}>
              <img src={data.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.project}</h5>
                <h6>{data.type}</h6>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary me-2">Source Code</button>
                <button className="btn btn-secondary ms-2">Try it Live</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
