import React from 'react'
 import Login from './Components/Login'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Posts from './Components/Posts'
import Gallery from './Components/Gallery'
import ToDo from './Components/ToDo'
import Profile from './Components/Profile'




function App() {
  return (
    
    <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/profile"  component={Profile} />
      {/* <Route path='/profile1' component={Profile1} /> */}
      <Route exact path="/posts" component= {Posts} />
      <Route exact path="/gallery" component= {Gallery} />
      <Route exact path="/todo" component= {ToDo} />
      <Route exact path="/map" component= {Map} />
    </Switch>
  </Router>
  
  )
}

export default App
