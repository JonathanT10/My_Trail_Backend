import { useState } from "react";
import "./App.css";
import axios from "axios";
import Wall from './components/wall';
import Login from './components/login';
import Register from './components/register';
import ErrorPage from './components/errorpage';
import jwtDecode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/profile";

import { Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState();
  const jwt = localStorage.getItem('token');
   
    return(
      <div className="background">
        <Switch>
          <Route path="/" exact component={Login}  render={props => {
              setUser(jwtDecode(jwt))
              if (!user) {
                return <Register />;
              } else { 
                axios
                  .get(`http://localhost:5000/api/user/${user._id}`)
                  .then((response) => setUser(response.data))
                return <Wall props={user}/>
              }
            }}/>
          <Route path="/login" component={Login} />
          <Route path="/wall" component={Wall}/>
          <Route path="/register" component={Register} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/profile" component={Profile} props={user}/>
        </Switch>
      </div>
  );
  }

  export default App;