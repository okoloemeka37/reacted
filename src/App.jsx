import React, { useState } from 'react';
import Action from './Action';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './Movie';



export default function App() {
  const dp={
    backgroundColor: "#212426",
    color:"white"
  }

  const lp={
    backgroundColor: "white",
    color:"#212426"
  }

const [theme, setTheme] = useState(dp);

  const dark=()=>{
   setTheme(dp)
  }

  const light=()=>{
    setTheme(lp)
  }

 


  return (
    <div className="app" style={theme}>
      <div className='tlip'>
  <input type="checkbox" className="checkbox" id="checkbox" />
  <label htmlFor="checkbox" className="checkbox-label">
    <i className="fas fa-moon" onClick={dark}></i>
    <i className="fas fa-sun" onClick={light}></i>
    <span className="ball"></span>
  </label>
</div>
    <Router>
        <div>
        <Switch>
          <Route exact path='/'>
          <Action />
          </Route>

          <Route path='/movie/:title/:y'>
          <Movie />
          </Route>

        </Switch>



        </div>
    </Router>
    </div>
  )
}
