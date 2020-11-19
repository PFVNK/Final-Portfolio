import React from 'react'

function Projects() {
  return (
    <div className='projects-container'>
      <a href='https://www.thesynth.live' target='_blank' rel='noreferrer'><h2>TheSynth</h2></a>
      <p>Synth built with React and Tone.js, styled with Sass. Choose from multiple voices and oscillators.</p>
      <a href="https://www.pizza-dough.com/" target='_blank' rel='noreferrer'><h2>Pizza Dough</h2></a>
      <p>Tip tracker for delivery drivers. Positions delivery drivers on leader board based on amount of tips made. React front-end and Node/MongoDB backend to track driver data.</p>
      <a href="https://www.get-stuff.net" target='_blank' rel='noreferrer'><h2>Get Stuff</h2></a>
      <p>Follow your favorite Craiglist searches and get notified when new items are added. Built with a React front-end and Node/Express backend</p>
      <a href="http://www.mlbd3.com/" target='_blank' rel='noreferrer'><h2>MLBD3</h2></a>
      <p>View offensive statistics from any MLB team in an interactive bubble chart. Statisics include batting average, total hits and home runs. Statistical data is scraped and processed with Node/Express and Cheerio. Built with React and D3, styled with Sass.</p>
      <a href="http://www.willyburger.net/" target='_blank' rel='noreferrer'><h2>Willy Burger</h2></a>
      <p>Website for local burger restaurant built with React and React-Router.</p>
      <a href="https://first-choice-pressure-washing.herokuapp.com/" target='_blank' rel='noreferrer'><h2>First Choice Pressure Washing</h2></a>
      <p>Company website for pressure washing company built with React and React-router. Styled with Sass</p>
    </div>
  )
}

export default Projects
