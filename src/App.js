import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Switch } from "react-router-dom"
import './App.css';
import Home from "./components/Home"


class App extends React.Component {

state={
    Data:[]
}

componentDidMount(){
this.fetchData()
}

fetchData=async()=>{
    let response= await fetch("http://localhost:3001/product")
    let data= await response.json()
    console.log(data, "data")
    this.setState({
        Data:data
    })

}
  render() {
    return (
      <Router>

        <div className="App">


          <Switch>

    <Route exact path="/" render={(props)=><Home {...props} data={this.state.Data}/>} />
   
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

