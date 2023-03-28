import React, { useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import './Lunch.css'

function Lunch() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

    return (
        <div className='lunchMain'>
            <ScrollToTop />
            <div className='btn'>
                <Link to='/breakfast' className='link'>Breakfast</Link>
                <Link to='/lunch' className='link'>Lunch / Dinner</Link>
                <Link to='/kids' className='link'>Kids</Link>
            </div>
            <h1 className='menuTitle'>Lunch/Dinner Menu</h1>
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Appetizers</h1>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg1' ></div>
                        <div className='text1'>
                            <h1>Cheese Sticks</h1>
                            <p>breaded mozzarella sticks served with marinara sauce</p>
                            <h2>$8.53</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg2'></div>
                        <div className='text1'>
                            <h1>Deep Fried Pickles</h1>
                            <p>delicious tangy dill pickles battered and fried, served with ranch dressing</p>
                            <h2>$9.28</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg3'></div>
                        <div className='text1'>
                            <h1>Spring Rolls</h1>
                            <p className='hd'>Dummy</p>
                            <h2>$6.94</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg4'></div>
                        <div className='text1'>
                            <h1>Grilled Chicken Quesadilla</h1>
                            <p>chicken breast grilled in a flour tortilla with cheese, onions, green & red peppers, served with salsa & sour cream</p>
                            <h2>$15.11</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg5'>
                            {/* <img src='2_egg.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Appetizer Platter</h1>
                            <p>Enjoy the combination of our signature lattice fries, sweet potato fries & onion rings served with dipping sauce</p>
                            <h2>$15.11</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg6'></div>
                        <div className='text1'>
                            <h1>Nacho Platter</h1>
                            <p>nachos covered with cheese, red & green peppers, served with salsa & sour cream</p>
                            <span className='gl'>Add Bacon : $0.99</span>
                            <span className='gl'>Gluten Free Platter is Available</span>
                            <h2>$15.11</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg7'></div>
                        <div className='text1'>
                            <h1>Garlic Bread</h1>
                            <p>2 pieces of oven baked ciabatta bread topped with garlic butter</p>
                            <span className='gl'>Add Cheese : $1.25</span>
                            <h2>$6.94</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg8'></div>
                        <div className='text1'>
                            <h1>Honey's Wings</h1>
                            <p>1 lb. breaded wings, served in your favorite sauce with carrots and celery</p>
                            <span className='gl'>(mild, medium, hot, honey garlic, BBQ)</span>
                            <h2>$14.58</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg9'></div>
                        <div className='text1'>
                            <h1>Chip & Dip</h1>
                            <p>basket of lattice fries served with french onion dip</p>
                            <h2>$9.96</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Soups & Salads</h1>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg10'></div>
                        <div className='text1'>
                            <h1>Honey's Soup of the Day</h1>
                            <p>served with tea biscuit/toast</p>
                            <h2>$7.41</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg11'></div>
                        <div className='text1'>
                            <h1>Soup & Salad Combo</h1>
                            <p>small soup and your choice of small salad</p>
                            <h2>$10.44</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg12'></div>
                        <div className='text1'>
                            <h1>Classic Caesar Salad</h1>
                            <p>lettuce topped with real bacon bits & homemade crotons, tossed with fresh parmesan cheese in a creamy caesar dressing</p>
                            <span className='gl'>Add Chicken : $3.17</span>
                            <h2>$11.18</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg13'></div>
                        <div className='text1'>
                            <h1>Greek Salad</h1>
                            <p>lettuce topped with red bermuda onions, olives, green peppers, tomatoes, cucumber, feta cheese & greek dressing</p>
                            <span className='gl'>Add Chicken : $3.17</span>
                            <h2>$11.18</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg14'></div>
                        <div className='text1'>
                            <h1>Garden Salad</h1>
                            <p>lettuce topped with onions, green & red peppers, tomatoes, cucumber, cranberries & your choice of dressing on the side</p>
                            <span className='gl'>Add Chicken : $3.17</span>
                            <h2>$11.18</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Honey's Bagels</h1>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg15'></div>
                        <div className='text1'>
                            <h1>Ham & Swiss Bagel</h1>
                            <p className='hd'>Dummy</p>
                            <h2>$7.41</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg16'></div>
                        <div className='text1'>
                            <h1>Honey's Bagel</h1>
                            <p>lettuce, bacon, egg, cheese & mayo</p>
                            <h2>$8.15</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg17'>
                            {/* <img src='bagelCreamCheese.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Bagel with Cream Cheese</h1>
                            <p className='hd'>Dummy</p>
                            <h2>$3.17</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg18'></div>
                        <div className='text1'>
                            <h1>Grilled Chicken Bagel</h1>
                            <p>chicken, bacon, tomato, lettuce & cheese</p>
                            <h2>$8.26</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg19'></div>
                        <div className='text1'>
                            <h1>Veggie Bagel</h1>
                            <p>lettuce, tomatoes, green peppers, cheese & ranch dressing</p>
                            <h2>$7.73</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg20'></div>
                        <div className='text1'>
                            <h1>Garbage on a Bagel</h1>
                            <p>bacon, ham, lettuce, tomatoes, cheese & mayo</p>
                            <h2>$7.94</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Sandwiches</h1>
                    <p>Gluten Free Bread is Available</p>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg21'></div>
                        <div className='text1'>
                            <h1>Honey's Cheddar</h1>
                            <p>2 large eggs, bacon OR ham OR sausage, toast & seasoned wedges</p>
                            <h2>$9.74</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg22'></div>
                        <div className='text1'>
                            <h1>corned Beef</h1>
                            <p>corned beef piled high on freshly grilled sandwich bread</p>
                            <h2>$10.96</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg23'></div>
                        <div className='text1'>
                            <h1>Grilled Reuben</h1>
                            <p>corned beef on freshly grilled pieces of rye bread, topped with swiss cheese, sauerkraut & 1000 island dressing</p>
                            <h2>$12.07</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg24'></div>
                        <div className='text1'>
                            <h1>Beef On A Bun</h1>
                            <p>pull out the napkins here, thinly shaved and piled high on a toasted ciabatta bun, topped with sauteed onions & gravy</p>
                            <h2>$12.07</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg25'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Honey's Classic Club</h1>
                            <p>our traditional triple decker club sandwich topped with chicken, lettuce, tomatoes, bacon, cheese & mayo</p>
                            <h2>$12.19</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg26'></div>
                        <div className='text1'>
                            <h1>Make It A Combo</h1>
                            <p>Choose small fries OR soup & A Drink (coffee, tea, pop)</p>
                            <h2>$5.50</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg27'></div>
                        <div className='text1'>
                            <h1>All In Combo</h1>
                            <p>small fries & soup & A Drink (coffee, tea, pop)</p>
                            <h2>$10.00</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Honey's Burgers</h1>
                    <p>Gluten Free Bun is Available</p>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg28'></div>
                        <div className='text1'>
                            <h1>Honey's Burger Classic</h1>
                            <p>our flavour bursting burger is topped with lettuce, tomatoes, onions, pickles & mayo</p>
                            <h2>$11.56</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg29'>
                            {/* <img src='cornBeef.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Mega Burger</h1>
                            <p>Honey's classic burger patty topped with lettuce, tomatoes, onions, mayo, fried egg, cheese & bacon</p>
                            <h2>$14.59</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg30'></div>
                        <div className='text1'>
                            <h1>BLT Burger</h1>
                            <p>our large patty topped with bacon, lettuce, tomatoes & mayo</p>
                            <h2>$12.19</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg31'></div>
                        <div className='text1'>
                            <h1>BBQ Burger</h1>
                            <p>Honey's burger topped with lettuce, tomatoes, cheese, bacon & BBQ sauce</p>
                            <h2>$13.97</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg32'></div>
                        <div className='text1'>
                            <h1>Canadian Burger</h1>
                            <p>Honey's Canadian style burger is topped with lettuce, tomatoes, mayo, peameal bacon & cheese</p>
                            <h2>$13.92</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg33'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Swiss Burger</h1>
                            <p>our burger patty is topped with lettuce, tomatoes, mushrooms, mayo & Swiss cheese</p>
                            <h2>$12.19</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg34'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Grilled Cheeseburger</h1>
                            <p>our big and juicy burger patty between a grilled cheese sandwich</p>
                            <h2>$11.41</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg35'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Spicy Buffalo Burger</h1>
                            <p>lettuce, tomatoes, pickles, onions, cheese & wing's HOT SAUCE</p>
                            <h2>$11.97</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg 36'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Hungry Double Bee Burger</h1>
                            <p>2 of our grandee burger patties topped with lettuce, tomatoes, onions, pickles & mayo</p>
                            <h2>$16.37</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg37'></div>
                        <div className='text1'>
                            <h1>Crispy Chicken Burger</h1>
                            <p>Breaded chicken burger topped with mayo, lettuce & tomatoes</p>
                            <h2>$12.19</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg38'></div>
                        <div className='text1'>
                            <h1>Make It A Combo</h1>
                            <p>Choose small fries OR soup & A Drink (coffee, tea, pop)</p>
                            <h2>$5.50</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg39'></div>
                        <div className='text1'>
                            <h1>All In Combo</h1>
                            <p>small fries & soup & A Drink (coffee, tea, pop)</p>
                            <h2>$10.00</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Honey's Wraps</h1>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg40'>
                            {/* <img src='burgerClassic.jfif'> */}
                        </div>
                        <div className='text1'>
                            <h1>Honey's Classic Wrap</h1>
                            <p>grilled chicken, lettuce, tomatoes, cheese & Ranch dressing</p>
                            <h2>$11.80</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg41'>
                            {/* <img src='cornBeef.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>The Ultimate Wrap</h1>
                            <p>grilled chicken, lettuce, tomatoes, onions, cheese, fries & Ranch dressing covered with 2 tortilla wraps</p>
                            <h2>$18.82</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg42'>
                            {/* <img src='bltBurger.jfif'> */}
                        </div>
                        <div className='text1'>
                            <h1>Hot & Spicy Wrap</h1>
                            <p>crispy chicken, lettuce, tomatoes, cheese & spicy tai dressing</p>
                            <h2>$12.07</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg43'>
                            {/* <img src='BBQBurger.jfif'> */}
                        </div>
                        <div className='text1'>
                            <h1>Buffalo Chicken Caesar Wrap</h1>
                            <p>crispy chicken, caesar salad & BBQ sauce</p>
                            <h2>$12.07</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg44'>
                            {/* <img src='canadianBurger.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Chicken Club Wrap</h1>
                            <p>grilled chicken, bacon, lettuce, tomatoes & Dijon mustard</p>
                            <h2>$11.91</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg45'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Burger Wrap</h1>
                            <p>Honey's classic burger patty chopped and stuffed in our tortilla wrap togther with lettuce, tomatoes onions & mayo</p>
                            <h2>$12.41</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg46'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Greek Wrap</h1>
                            <p>grilled chicken, lettuce, tomatoes, onions, feta cheese & Greek dressing</p>
                            <h2>$12.19</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg47'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Smoked Montreal Wrap</h1>
                            <p>saved montreal meat, lettuce, pickles & Dijon mustard</p>
                            <h2>$11.91</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg48'>
                            {/* <img src='clubSW.jpg'> */}
                        </div>
                        <div className='text1'>
                            <h1>Veggie Wrap</h1>
                            <p>assorted vegetables, cheese & Ranch dressing</p>
                            <h2>$11.35</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg49'></div>
                        <div className='text1'>
                            <h1>Make It A Combo</h1>
                            <p>Choose small fries OR soup & A Drink (coffee, tea, pop)</p>
                            <h2>$5.50</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg50'></div>
                        <div className='text1'>
                            <h1>All In Combo</h1>
                            <p>small fries & soup & A Drink (coffee, tea, pop)</p>
                            <h2>$10.00</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Honey's Fish</h1>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg51'></div>
                        <div className='text1'>
                            <h1 className='fish'>Honey's Old Fashion Fish & Chips</h1>
                            <p>our crispy 10 oz haddock served with homemade coleslaw, lemon, tartar sauce & our classic golden fries</p>
                            <h2>$22.25</h2>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Honey's Dinner Classics</h1>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg53'></div>
                        <div className='text1'>
                            <h1 className='fish'>Honey's Chicken Tender Dinner</h1>
                            <p>our breaded chicken tenders served with our classic golden fries & Plum sauce</p>
                            <h2>$18.20</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg54'></div>
                        <div className='text1'>
                            <h1 className='fish'>Hot Hamburger</h1>
                            <p>our open faced burger is served on bread covered with sauteed onions & gravy, served with coleslaw & fries</p>
                            <h2>$17.09</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='titles'>
                <div className='breakfastTitle'>
                    <h1>Sides</h1>
                </div>
                <div className='grid'>
                    <div className='box1'>
                        <div className='imgBx limg55'></div>
                        <div className='text1'>
                            <h1>Classic Fries</h1>
                            <h2>$5.50</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg56'></div>
                        <div className='text1'>
                            <h1>Sweet Potato Fries</h1>
                            <h2>$6.50</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg57'></div>
                        <div className='text1'>
                            <h1>Onion Rings</h1>
                            <h2>$6.50</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg58'></div>
                        <div className='text1'>
                            <h1>Gravy</h1>
                            <h2>$6.50</h2>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='imgBx limg59'></div>
                        <div className='text1'>
                            <h1>Update Any Side to Poutine</h1>
                            <h2>$2.99 Extra</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lunch