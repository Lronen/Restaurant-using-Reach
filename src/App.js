import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Breakfast from './components/pages/Breakfast';
import Lunch from './components/pages/Lunch';
import Kids from './components/pages/Kids';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/menu' component={Menu} />
        <Route path='/breakfast' component={Breakfast} />
        <Route path='/lunch' component={Lunch} />
        <Route path='/kids' component={Kids} />
        <Route path='/contactus' component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
