import logo from './logo.svg';
import './App.css';
import { Fragment,useState,Component } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Tasks from './Tasks';
import Solution from './Solution';
import Nav from './Nav'


function App() {
  return (
    <Router>
   
    <Switch>
    <Route exact path='/' component={Login} />
   
    <Route exact path='/home' component={Home} />
    <Route exact path='/tasks' component={Tasks} />
    <Route exact path='/solution' component={Solution} />
    <Route exact path='/nav' component={Nav} />
    </Switch>
    </Router>
  );
}

export default App;
