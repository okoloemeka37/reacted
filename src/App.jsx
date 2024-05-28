import React from 'react';
import Action from './Action';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './Movie';
import Mine from './Mine';




export default function App(props) {
  return (
    <Router>
        <div>
        <Switch>
          <Route exact path='/'>
          <Action />
          </Route>

          <Route path='/movie/:title/:y'>
          <Movie />
          </Route>

          <Route path='/music'>
          <Mine />
          </Route>

        </Switch>
        </div>
    </Router>
  )
}
