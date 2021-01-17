import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Record from './pages/Record/Record';
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import "./App.css";
import DemoRecord from './pages/Record/DemoRecord';


function App() {
  return (
        <Router>
           <div className="App">
            <Route path = "/" component={Home}/>
            <Route path = "/record" component={Record}/>
           </div>
           </Router>
      
      
  );
}

const Home = () => (
  <div>
    <h1> Home Page </h1>
  </div>
);

export default App;
