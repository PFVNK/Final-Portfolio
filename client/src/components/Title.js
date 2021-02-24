import React from 'react'
import { Fade } from "react-awesome-reveal";

function Title() {
  return (
    <div className='title-container'>
      <Fade delay={200}>
        <h1>PATRICK HEFLIN</h1>
      </Fade>
      <Fade delay={250}>
        <h3>HOUSTON, TX || WEB DEVELOPER</h3>
      </Fade>
    </div>
  )
}

export default Title
