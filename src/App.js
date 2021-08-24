import './App.css';
import React,{useState} from 'react';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,
  Route } from 'react-router-dom'
import Contact from './components/pages/Contact';
function App() {  
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/contactus'>
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
