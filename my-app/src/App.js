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
