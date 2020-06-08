import React, { Component} from "react";
import { hot } from 'react-hot-loader/root';
import { Hello } from "./components/Hello";
import "./App.css";

class App extends Component{
  render(){
    return(
        <div className="App">
            <h1> Hola HOLA Hello, Wokjashdklahdarld! </h1>
            <Hello compiler="TypeScript" framework="React" />
        </div>
    );
  }
}

export default hot(App);
