
import './sign_in.css';

import like from './svg/sign_in.svg';
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
  <h3>


  <Button variant="contained" color="primary" size = "large" href="#contained-buttons"
  style = {{maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: 'px'}} >
      Sign-up
    </Button>
    </h3>

    <body>
      <Button variant="contained" color="primary" size = "large" href="#contained-buttons" 
      style = {{maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: 'px'}}>  
  Sign-in </Button>
  </body>
  
    </div>
  );
}

export default landing;
