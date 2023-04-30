import "./WorkCardStyle.css"

import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <div className="projectImg" >
      <img src={props.imageSrc} alt="projectImg"/>
      </div>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-detail">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">View</NavLink>
          <NavLink to={props.source} className="btn">Source</NavLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard