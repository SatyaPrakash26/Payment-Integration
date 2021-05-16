import Navbar from "./NavBar/NavBar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Gallery from "./Components/Gallery";

function App() {

  return (
    <Router basename ="/integration">
      <div className="App">
      <Navbar />
      <Switch>
          <Route exact path ='/' component ={Home} />
          <Route  path ='/about' component ={About} />   
          <Route  path ='/gallery' component ={Gallery} />   
          
          
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
