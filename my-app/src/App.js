
import logo from './logo.svg';
import './App.css';
import landing from './pages/Landing/landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParamsE
} from "react-router-dom";



function App() {
  return (
    
        <Router>
          
           <div className="App">
           <landing/>
            {/* <Route path = "/" component={Home}/> */}
            {/* <Route path = "/record" component={Record}/> */}
            <Route path = "/landing" component={landing}/>
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