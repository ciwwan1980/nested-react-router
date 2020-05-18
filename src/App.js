import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Switch } from "react-router-dom"
import './App.css';
import Home from "./components/Home"

class App extends React.Component {


  render() {
    return (
      <Router>

        <div className="App">


          <Switch>

    <Route path="/" component={Home} />
    
          </Switch>
        </div>
      </Router>
    );
  }
}
// component={Details}

export default App;

// <Route exact path="/products"  component={Product}/>
//     <Route exact path="/products/:name" component={Details} />