  
//import logo from './logo.svg';
import './App.css';
import pickPartner from './pages/pickPartner/pickPartner';
import signIn from './pages/signIn/signIn';

/*import Record from './pages/Record/Record';
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import DemoRecord from './pages/Record/DemoRecord';*/

//import Record from './pages/Record/Record';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function App() {
  return (
        <Router>
           <div className="App">
            <Route path = "/" component={Home}/>
            <Route path = "/signIn" component={signIn}/>
            <Route path = "/pickPartner" component={pickPartner}/>
           
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