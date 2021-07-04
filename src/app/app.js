import React from 'react';
import {Switch, Route} from "react-router-dom";

import NavBlock from '../components/nav-block';
import Error from '../components/error';
import {
  StartedPage,
  SecondTask,
  ThirdTask,
  FourthTask
} from '../components/pages';

import './app.css';

function App() {
  return (
    <div className="app">
      <NavBlock/>
      <div className="app-container">

        <Switch>
          <Route path="/" exact component={StartedPage} />
          <Route path="/1" exact component={StartedPage}/>
          <Route path="/2" exact component={SecondTask}/>
          <Route path="/3" exact component={ThirdTask}/>
          <Route path="/4" exact component={FourthTask}/>
          <Route path="/5" exact component={StartedPage}/>
          <Route path="/*" component={Error}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;