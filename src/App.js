import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import FizzBuzz from './components/FizzBuzz';
import Bowling from './components/Bowling';
import ShoppingCart from './components/ShoppingCart';



import katas from './components/data/kata-click.json'

function getComponent(key) {
  var component = {};

  if(key == "FizzBuzz") {component = FizzBuzz}
  else if (key == "Bowling") {component = Bowling}
  else if (key == "ShoppingCart") {component = ShoppingCart}
  else {component = Home} 

  return component;
  }

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {katas.kataList.map((kata) => {
            return <Route exact path={kata.path} component={getComponent(kata.key)} key={kata.key}/>
            })}
        </Switch>
      </Router>
    </div>
  );
}

