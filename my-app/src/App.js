import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Game from "./components/Game"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Nav from "./components/Nav"


//import StyledHeader from './styledComponents/StyledHeader'
//import 

const App = () => {
  const [user, setUser] = useState(null)
  //let loggedIn = false

  console.log('pocetak')
  
  return (

    <Router>
      <nav>
       <Nav user={user}  setUser={setUser}/>
      </nav>
      <Switch>
        <Route path="/Login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/Game">
          <Game loggedIn={user} />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/">
          <Home loggedIn={user} />
        </Route>
      </Switch>

    </Router>

  )
}
export default App;