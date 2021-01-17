import './landing.css';

import like from './svg/exercise.svg';
import logo from './svg/logo.png';

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { positions } from '@material-ui/system';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


function landing() {
  return (
    <div className="App">
    
      <h2>
      <Button variant="contained" color="primary" href="#contained-buttons" right = "50px">  
  Login </Button>
  </h2>
  <img src={like} id = "like" alt = 'like' />
  <img src={logo} id = "logo" alt = 'logo' />
  <h3>
  <Button variant="contained" color="primary"  href="#contained-buttons" >
      Sign-up
    </Button>
    </h3>
    </div>
  );
}

export default landing;