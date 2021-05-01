import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home/home/Home'
import PortFolio from './components/Portfolio/PortFolio'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'

const App = () => {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio">
            <PortFolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
