
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
  <img src={like} id = "like" alt = 'like' />
  <img src={logo} id = "logo" alt = 'logo' />
  <h1>Vfit</h1>
  <h2 >Exercise virtually with each other </h2> 
  
  <h3>
  </h3>
  <div id = "jet" >
  <Button style={{maxWidth: '200%', maxHeight: '45%', minWidth: '150%', minHeight: '250%'}}
  variant="contained" color="primary"  href="#contained-buttons" >
     Sign up to learn more!
    </Button>
    </div> 

    <h4>Practice social distancing right at home! </h4>
    </div>
  );
}

export default landing;
