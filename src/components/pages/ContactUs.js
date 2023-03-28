import React, { useLayoutEffect, useState } from 'react';
import './Contact.css';
import { FaFacebook } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import ScrollToTop from '../ScrollToTop';
import { send } from 'emailjs-com';

function ContactUs() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const newTab = () => {
    window.open('https://www.google.ca/maps/place/Honeys+Diner/@44.578918,-78.177826,17z/data=!3m1!4b1!4m6!3m5!1s0x4cd4bc6555555555:0x77521082d680d313!8m2!3d44.578918!4d-78.177826!16s%2Fg%2F1th56mbv?hl=en', '_blank', 'noreferrer');
  }

  const faceBook = () => {
    window.open('https://www.facebook.com/HoneysDinerWoodview', '_blank', 'noreferrer');
  }

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_tzhgd1f',
      'template_kj77mlg',
      toSend,
      'wOXrlATIbheIggFHM'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='contactMain'>
      <ScrollToTop />
      <div className="contact">
            <h1 className="titleText"><span>C</span>ontact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className="contactContent">
          <div className="contactInfo">
            <h3 className="contactTitle">Contact Info</h3>
            <div className="contactInfoBx">
              <div className="box">
                <div className="icon">
                  <div className='link' onClick={newTab}>
                    <ImLocation2 className='fcb' />
                  </div>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>5584 Hwy 28,Woodview, ON,K0L 3E0</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>705-654-4197</p>
                </div>
              </div>
            <div className="box">
              <div className="icon">
                <div className='icon' onClick={faceBook}><FaFacebook className='fcb' /></div>
              </div>
              <div className="text">
                <div className="fb" onClick={faceBook}><h3>Facebook</h3></div>
              </div>
            </div>
          </div>
        </div>
        <div className="formBx">
          <form onSubmit={onSubmit}>
            <h3 className="formTitle">Message Us</h3>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Full Name" 
              value={toSend.name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={toSend.email}
              onChange={handleChange}
            />
            <input 
              type="phone" 
              name="phone" 
              placeholder="Your Phone Number" 
              value={toSend.phone}
              onChange={handleChange}
            />
            <textarea 
              name='message'
              placeholder="Your Message"
              value={toSend.message}
              onChange={handleChange}
            >
            </textarea>
            <input 
              type="submit" 
              value="Send" 
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs