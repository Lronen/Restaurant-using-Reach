import React, { useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import './Kids.css'

function Kids() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className='kidsMain'>
      <ScrollToTop />
      <div className='btn'>
        <Link to='/breakfast' className='link'>Breakfast</Link>
        <Link to='/lunch' className='link'>Lunch / Dinner</Link>
        <Link to='/kids' className='link'>Kids</Link>
      </div>
      <h1 className='menuTitle'>Kids Menu</h1>
      
        <div className='titles'>
          <div className='breakfastTitle'>
            <h1>Kids Breakfast</h1>
          </div>
            <div className='grid'>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='b_Special.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>1 Egg Breakfast</h1>
                        <p>1 egg, meat slice, toast & your choice of homefries OR fruits</p>
                        <h2>$7.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='c_Special.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>2 Egg Omelette</h1>
                        <p>2 eggs cheese omelette w/ toast & fruits</p>
                        <h2>$7.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='l_Special.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>Pancakes</h1>
                        <p>2 pancakes w/ fruits & meat slice</p>
                        <h2>$7.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='1_Egg.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>French Toast</h1>
                        <p>2 pc french toast w/ fruits & meat slice</p>
                        <h2>$7.99</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='titles'>
            <div className='breakfastTitle'>
                <h1>Kids Lunch</h1>
                <p>All Items Bellow Served with Choice of Fries OR Veggie Sticks OR Caesar Salad</p>
            </div>
            <div className='grid'>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='Burrito.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>Chicken Wrap</h1>
                        <p>grilled chicken, cheese, lettuce & ranch dressing served with fries OR veggie sticks</p>
                        <h2>$9.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='KawarthWrap.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>Cheese Quesadilla</h1>
                        <p>cheese mix melted inside a 12' tortilla</p>
                        <h2>$9.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='CanadianWrap.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>Chicken Nuggets</h1>
                        <p>real chicken nuggets</p>
                        <h2>$9.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='CanadianWrap.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>Grilled Cheese S/W</h1>
                        <p>grilled cheese s/w with real cheddar cheese</p>
                        <h2>$9.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='CanadianWrap.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>Chicken Popcorn</h1>
                        <p>real chicken bits</p>
                        <h2>$9.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx'>
                        {/* <img src='CanadianWrap.jpg'> */}
                    </div>
                    <div className='text1'>
                        <h1>Plain Burger</h1>
                        <p>our classic burger patty served on a bun</p>
                        <h2>$9.99</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kids