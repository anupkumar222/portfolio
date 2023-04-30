import "./WorkCardStyle.css"

import React from 'react';
import WorkCard from "./Workcard";
import WorkCardData from "./WorkCardData"

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((value, index) => {
            return (
                <WorkCard 
                key={index}
                imageSrc={value.imageSrc}
                title={value.title}
                text={value.text}
                view={value.view}
                source={value.source}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work