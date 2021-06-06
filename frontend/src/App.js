import "./App.css";
import React from 'react';
import './components/css/wall.css';
import Wall from './components/wall';
import Login from './components/login';
import Register from './components/register';
import ErrorPage from './components/errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/profile";
import { Switch, Route } from 'react-router-dom';

function App() {

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