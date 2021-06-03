// import { useState } from "react";
import React from 'react';
import './components/css/wall.css';
import Wall from './components/wall';
import Login from './components/login';
import Register from './components/register';
import ErrorPage from './components/errorpage';
// import jwtDecode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/profile";

import { Switch, Route } from 'react-router-dom';

function App() {
  // const [user, setUser] = useState();
  // const jwt = localStorage.getItem('token');
  
              

  // const authUser = async()=>{
  //   console.log("auth trigger test")
  //   await axios
  //     .get(`http://localhost:5000/api/user/${user._id}`)
  //     .then((response) => setUser(response.data))
  // }
   
    return(
      <div className="background">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/wall" component={Wall} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/error" component={ErrorPage} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
  );
  }

  export default App;