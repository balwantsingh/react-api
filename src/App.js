import React, { useState } from 'react'
import logo from './logo.svg'
import About from './about'
import Contact from './contact'
import Users from './users'
import CreateUser from './createUser'
import Home from './home'
import Products from './products'

import './App.css'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><Link to="/">Aynsoft</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/list">Clients</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/create">Register</Link></Nav.Link>
          </Nav>

        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
