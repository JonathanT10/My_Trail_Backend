import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Wall from './components/wall';
import Login from './components/login';
import Register from './components/register';
import ErrorPage from './components/errorpage';
import jwtDecode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
 const [user, setUser] = useState();
 const jwt = localStorage.getItem('token');
 try{
   setUser(jwtDecode(jwt));
   console.log.apply(jwt)
   
 } catch {

 }

    return(
        <>
          <Switch>
            <Route path="/" exact component={Login} render={props => {
              if (!user) {
                return <Redirect to="/" />;
              } else { 
                return <Wall {...props} user={user}/>
              }
            }}
             />
            <Route path="/register" exact component={Register} />
            <Route path="/error" exact component={ErrorPage} />
          </Switch>
        </>
    );
  }

  export default App;