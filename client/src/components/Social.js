import React from 'react'

import { FaInstagram, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

let instagram = <FaInstagram className='icons' size='2.5em' />
let github = <FaGithub className='icons' size='2.5em' color='#D6D8DA' />
let youtube = <FaYoutube className='icons' size='2.5em' color='#FF0000' />
let twitter = <FaTwitter className='icons' size='2.5em' color='#55acee' />

function Social() {
  return (
    <div className='social-container'>
      <div className='social-icons'>
        <div className='github-icon'>{github}</div>
        <div className='youtube-icon'>{youtube}</div>
        <div className='instagram-icon'>{instagram}</div>
        <div className='twitter-icon'>{twitter}</div>
      </div>
    </div>
  )
}

export default Social
