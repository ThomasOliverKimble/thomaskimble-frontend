import React, { useState, useEffect } from 'react';
import '../App.css'
import './ProjectGrid.css';

function ProjectGrid() {

  useEffect(() => {
    document.getElementById('project-grid-title').innerHTML = "new title";
 });

  return (
    <>
      <div className='project-grid-container'>
        <h1 id='project-grid-title'></h1>
      </div>
    </>
  )
}

export default ProjectGrid