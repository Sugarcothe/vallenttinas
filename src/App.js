import './App.css';
import Navbar from './Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Puellae from './Puellae/Puellae'


function App() {
  return (
    
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route path='/Puellae' exact component={Puellae}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
