import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Wall from './components/wall';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';

function App() {

    return(
        <div className="App">
          <Switch>
            <Route path="/" exact component={Wall} />
          </Switch>
        </div>
    );
  }

  export default App;