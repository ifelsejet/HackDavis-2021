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
/*import DemoRecord from './pages/Record/DemoRecord';*/
import MoreRecord from './MoreRecord';

console.log(MoreRecord);
function App() {
  return (
        <Router>
           <div className="App">
            
            <Route path = "/record" component={MoreRecord}/>
           </div>
           </Router>
      
      
  );
}



export default App;
