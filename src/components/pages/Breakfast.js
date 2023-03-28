import React, { useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import './Breakfast.css';

function Breakfast() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className='breakfastMain'>
        <ScrollToTop />
        <div className='btn'>
            <Link to='/breakfast' className='link'>BreakfastLink</Link>
            <Link to='/lunch' className='link'>Lunch / Dinner</Link>
            <Link to='/kids' className='link'>Kids</Link>
        </div>
        <h1 className='menuTitle'>Breakfast Menu</h1>
        <div className='titles'>
            <div className='breakfastTitle'>
                <h1>Egg Breakfast</h1>
            </div>
            <div className='grid'>
                <div className='box1'>
                    <div className='imgBx img1'></div>
                    <div className='text1'>
                        <h1>Breakfast Special</h1>
                        <p>2 large eggs, bacon OR ham OR sausage, toast & seasoned wedges</p>
                        <h2>$9.67</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img2'></div>
                    <div className='text1'>
                        <h1>Carpenter's Special</h1>
                        <p>3 large eggs, peameal bacon, toast & seasoned wedges</p>
                        <h2>$12.23</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img3'></div>
                    <div className='text1'>
                        <h1>Landscaper's Specials</h1>
                        <p>3 large eggs, bacon, ham & sausage, toast & seasoned wedges</p>
                        <h2>$12.23</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='titles'>
            <div className='breakfastTitle'>
                <h1>Breakfast Wraps</h1>
            </div>
            <div className='grid'>
                <div className='box1'>
                    <div className='imgBx img7'></div>
                    <div className='text1'>
                        <h1>Bee Burrito</h1>
                        <p>3 eggs mixed with bacon, peppers, onions & cheese</p>
                        <h2>$8.89</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img8'></div>
                    <div className='text1'>
                        <h1>Kawartha Wrap</h1>
                        <p>3 eggs mixed with onions, mushrooms, green peppers & cheese</p>
                        <h2>$7.23</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img9'></div>
                    <div className='text1'>
                        <h1>Canadian Wrap</h1>
                        <p>3 eggs mixed with sausage, onions & cheese</p>
                        <h2>$8.33</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='titles'>
            <div className='breakfastTitle'>
                <h1>Breakfast Omelettes</h1>
            </div>
            <div className='grid'>
                <div className='box1'>
                    <div className='imgBx img10'></div>
                    <div className='text1'>
                        <h1>Honey's Omelette</h1>
                        <p>3 large eggs mixed with bacon, ham & sausage topped with cheese blend</p>
                        <h2>$14.90</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img11'></div>
                    <div className='text1'>
                        <h1>Loaded Meat Omelette</h1>
                        <p>3 large eggs mixed with ham, roast beef & cheese blend</p>
                        <h2>$14.34</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img12'></div>
                    <div className='text1'>
                        <h1>Cheese Omelette</h1>
                        <p>3 large eggs stuffed with your choice of 3 cheese blend OR feta cheese</p>
                        <h2>$10.56</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img13'></div>
                    <div className='text1'>
                        <h1>Philly Beef Omelette</h1>
                        <p>3 large eggs mixed with roast beef, onions, green peppers & cheese blend</p>
                        <h2>$13.90</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img14'></div>
                    <div className='text1'>
                        <h1>Veggie Omelette</h1>
                        <p>3 large eggs mixed with mushrooms, peppers, tomatoes & onions</p>
                        <h2>$10.56</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img15'></div>
                    <div className='text1'>
                        <h1>Western Omelette</h1>
                        <p>3 large eggs mixed with ham, green peppers & onions</p>
                        <h2>$11.67</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='titles'>
            <div className='breakfastTitle'>
                <h1>Breakfast Sandwiches</h1>
            </div>
            <div className='grid'>
                <div className='box1'>
                    <div className='imgBx img16'></div>
                    <div className='text1'>
                        <h1>Fried Egg</h1>
                        <p>2 fried eggs served on a toast</p>
                        <h2>$4.44</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img17'></div>
                    <div className='text1'>
                        <h1>Fried Egg & Meat</h1>
                        <p>2 fried eggs with your choice of bacon OR ham</p>
                        <h2>$5.55</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img18'></div>
                    <div className='text1'>
                        <h1>BLT</h1>
                        <p>bacon, lettuce, tomato & mayo</p>
                        <h2>$7.22</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img19'></div>
                    <div className='text1'>
                        <h1>Peameal on a Bun</h1>
                        <p>peameal bacon, lettuce, tomato, cheese & mayo</p>
                        <h2>$8.89</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img20'></div>
                    <div className='text1'>
                        <h1>Toasted Western</h1>
                        <p>2 large eggs, ham, green peppers & onions</p>
                        <h2>$9.40</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='titles'>
            <div className='breakfastTitle'>
                <h1>Breakfast Sides</h1>
            </div>
            <div className='grid'>
                <div className='box1'>
                    <div className='imgBx img21'></div>
                    <div className='text1'>
                        <h1>Seasoned Wedges</h1>
                        <h2>$4.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img22'></div>
                    <div className='text1'>
                        <h1>2pc Hash Browns</h1>
                        <h2>$2.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img23'></div>
                    <div className='text1'>
                        <h1>Baked Beans</h1>
                        <h2>$1.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img24'></div>
                    <div className='text1'>
                        <h1>Extra Cheese</h1>
                        <h2>$1.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img25'></div>
                    <div className='text1'>
                        <h1>Toast (2 slices)</h1>
                        <h2>$2.29</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img26'></div>
                    <div className='text1'>
                        <h1>Fresh Cut Tomatoes</h1>
                        <h2>$2.49</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img27'></div>
                    <div className='text1'>
                        <h1>Extra Egg</h1>
                        <h2>$1.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img28'></div>
                    <div className='text1'>
                        <h1>Peameal Bacon</h1>
                        <h2>$3.99</h2>
                    </div>
                </div>
                <div className='box1'>
                    <div className='imgBx img29'></div>
                    <div className='text1'>
                        <h1>Side Bacon, Ham, Sausage</h1>
                        <h2>$2.99</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breakfast