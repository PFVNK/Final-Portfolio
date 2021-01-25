import React from 'react'

import { FaInstagram, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

let instagram = <FaInstagram className='icons' alt='instagram icon' size='2.5em' color='#181818' />
let github = <FaGithub className='icons' alt='github icon' size='2.5em' color='#D6D8DA' />
let youtube = <FaYoutube className='icons' alt='youtube icon' size='2.5em' color='#FF0000' />
let twitter = <FaTwitter className='icons' alt='twitter icon' size='2.5em' color='#55acee' />

function Social() {
  return (
    <div className='social-container'>
      <div className='social-icons'>
        <a href="https://github.com/PFVNK"><div className='github-icon' alt='Github Icon'>{github}</div></a>
        <a href="https://www.youtube.com/channel/UCrkemqz8EI5wuaN5C4apjpA?view_as=subscriber"><div className='youtube-icon' alt='Youtube Icon'>{youtube}</div></a>
        <a href="https://www.instagram.com/pfvnk/"><div className='instagram-icon' alt='Instagram Icon'>{instagram}</div></a>
        <a href="https://twitter.com/PFVNK"><div className='twitter-icon' alt='Twitter Icon'>{twitter}</div></a>
      </div>
    </div>
  )
}

export default Social
