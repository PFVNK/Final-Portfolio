import { useState } from 'react';
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

import loadable from '@loadable/component'

const About = loadable(() => import('./About'))
const Videos = loadable(() => import('./Videos'))
const Projects = loadable(() => import('./Projects'))
const Contact = loadable(() => import('./Contact'))

let ex = <AiOutlineClose className='icon' />
let arrow = <AiOutlineDown className='icon' />

function Dropdown() {
  const [aboutClicked, setAboutClick] = useState(false)
  const [videoClicked, setVideoClick] = useState(false)
  const [projectsClicked, setProjectsClick] = useState(false)
  const [contactClicked, setContactClick] = useState(false)
  return (
    <>
      <div className='dropdown-container'>
        <div className='dropdown-box'>
          <div className='dropdown' onClick={() => setAboutClick(!aboutClicked)}>About {aboutClicked ? ex : arrow}</div>
          <div className='dropdown-shadow'></div>
          <div>{aboutClicked ? <About /> : null}</div>
          <div className='dropdown' onClick={() => setVideoClick(!videoClicked)}>Videos {videoClicked ? ex : arrow}</div>
          <div className='dropdown-shadow'></div>
          <div>{videoClicked ? <Videos /> : null}</div>
          <div className='dropdown' onClick={() => setProjectsClick(!projectsClicked)}>Projects {projectsClicked ? ex : arrow}</div>
          <div className='dropdown-shadow'></div>
          <div>{projectsClicked ? <Projects /> : null}</div>
          <div className='dropdown' onClick={() => setContactClick(!contactClicked)}>Contact {contactClicked ? ex : arrow}</div>
          <div className='dropdown-shadow'></div>
          <div>{contactClicked ? <Contact /> : null}</div>
        </div>
      </div>
    </>
  )
}

export default Dropdown
