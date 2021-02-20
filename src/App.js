import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch,Route, Redirect} from "react-router-dom";
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
function App() {
  return (
   <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route
           exact 
           path="/login"
           component={Login}

          />
          <Route path=""
            render={()=>"404 Not Found !"}/>

        </Switch>
    </Router>
  );
}

export default App;
