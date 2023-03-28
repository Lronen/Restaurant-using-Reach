import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Menu() {
  return (
    <div className='menuMain'>
      <div className='secondaryMenu'>
        <div className='m1'>
          <Link to='/breakfast' className='link'>Breakfast</Link>
        </div>
        <div className='m1'>
          <Link to='/lunch' className='link'>Lunch/Dinner</Link>
        </div>
        <div className='m1'>
          <Link to='/kids' className='link'>Kids</Link>
        </div>
      </div>
      <div className='carousel'>
        <ImageSlider slides={SliderData} />
      </div>
    </div>
  )
}

export default Menu