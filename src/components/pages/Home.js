import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';


function Home() {
  return (
    <div className='main'>
      <div className='home'>
        <h1><span>A</span>lways <span>C</span>hoose</h1>
        <h1><span>H</span>oney'<span>s</span></h1>
        <p>The best meal you will ever have.</p>
      </div>
      <Link to='/about' className='homeButton'>About Us</Link>
    </div>
  )
}

export default Home