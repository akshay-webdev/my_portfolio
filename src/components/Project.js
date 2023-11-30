import React, { useState } from "react";
const Project = ({ Data }) => {
  const [getData, setData] = useState(Data);

  console.log(getData);

  return (
    <>
    <div className="row" style={{gap:'39px',width:'100%'}}>
      {getData.map((data, i) => (
          <div className="card col-3" style={{width:'31%'}} key={i}>
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
    </>
  );
};

export default Project;
