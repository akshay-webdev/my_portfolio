import React from 'react'
import Project from './Project'
import Data from '../db/data'
const Home = () => {
  return (
   <>
    <div className='row d-flex align-items-center'>
      <div className='col-md-5'>
          <h5>Hi, Iam Akshay</h5>
          <h6>A Front-End Developer</h6>
          <button className='download-btn'>Download CV</button>
      </div>
      <div className='col-md-7'>
          <img src='./h5.svg'/>
      </div>

    </div>
    <Project Data={Data}/>


   </>
  )
}

export default Home