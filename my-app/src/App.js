import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Game from "./components/Game"

const App = () => {
   
    console.log('pocetak')
    return(

        <Router>
        <nav>
          {/* <Link to="/Home">Home</Link> */}
          {/* {user ?
            <>
              <Link to="/Game">Game</Link>
              <span>Username: {user.username}</span>
              <button onClick={() => setUser(null)}>LOGOUT</button>
             )
            </>
            :
            <>
              <Link to="/Login">Login</Link>
              <Link to="/Register">Register</Link>
            </>
          } */}
              <Link to="/Home">Home</Link>
              <Link to="/Game">Game</Link>
              <Link to="/Login">Login</Link>
              <Link to="/Register">Register</Link>
        </nav>
        <Switch>
          <Route path="/Login">
            <Login  />
          </Route>
          <Route path="/Game">
            <Game  />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <Home loggedIn={true} />
          </Route>
        </Switch>
  
      </Router>
        
    )
}
export default App;