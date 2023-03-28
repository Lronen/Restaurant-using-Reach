import React from 'react'
import Sparkle from 'react-sparkle'
import '../../App.css';

function Home() {
  return (
    <div className='main'>
      <div className='homePic1'>
        <div className='homePics1'></div>
        <div className='homePics2'></div>
      </div>
      <div className='home'>
        <h1><span>A</span>lways <span>C</span>hoose</h1>
        <h1><span>H</span>oney'<span>s</span></h1>
        <Sparkle /><p>The best meal you will ever have.</p>
      </div>
      <div className='homePic2'>
        <div className='homePics3'></div>
        <div className='homePics4'></div>
      </div>
    </div>
  )
}

export default Home