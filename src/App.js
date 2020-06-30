import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homepage.component'
import './App.css';

const Hats = () => <div><h1>Hello Hats</h1></div>

function App() {

  return(
  <div>
    <Switch>
      <Route exact path = '/' component={HomePage}/>
      <Route exact path = '/hats' component = {Hats} />
    </Switch>
  </div>
  ) 

}

export default App;