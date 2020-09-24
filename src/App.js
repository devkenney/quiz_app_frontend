import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootswatch/dist/solar/bootstrap.min.css'
import Index from './components/Index'
import Navbar from './components/Navbar';
import New from './components/New';

const App = () => {
  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <Switch>
          <Route
            path="/index"
            render={() => {
              return (
                <Index />
              )
            }}
          />
          <Route
            path="/new"
            render={() => {
              return (
                <New />
              )
            }}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
