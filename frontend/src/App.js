import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Wall from './components/wall';
import Login from './components/login';
import Register from './components/register';
import ErrorPage from './components/errorpage';
import LandingPage from './components/landingpage';
import jwtDecode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [user, setUser] = useState();
  const jwt = localStorage.getItem('token');
  

    return(
        <div className="background">
          <Switch>
            <Route path="/" exact component={Login}  render={props => {
                setUser(jwtDecode(jwt))
                console.log(user)
                if (!user) {
                  return <Register />;
                } else { 
                  return <Wall {...props} user={user}/>
                }
              }}/>
            <Route path="/login" component={Login} />
            <Route path="/wall" component={Wall} />
            <Route path="/register" component={Register} />
            <Route path="/error" component={ErrorPage} />
          </Switch>
        </div>
    );
  }

  export default App;