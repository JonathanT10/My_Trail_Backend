import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Wall from './components/wall';
import Login from './components/login';
import Register from './components/register';
import ErrorPage from './components/errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';

function App() {

    return(
        <>
          <Switch>
            <Route path="/wall" exact component={Wall} />
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/error" exact component={ErrorPage} />
          </Switch>
        </>
    );
  }

  export default App;