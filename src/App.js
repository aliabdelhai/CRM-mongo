import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clients from "../src/components/Clients";
import Navbar from "../src/components/NavBar";
import Actions from "../src/components/Actions";
import Analytics from "../src/components/Analytics";
import { observer } from 'mobx-react'


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" render={() => <Clients />} />
      <Route exact path="/clientss" render={() => <Clients /> }/>
      <Route exact path="/actions" render={() => <Actions /> }/>
      <Route exact path="/analytics" render={() => <Analytics /> }/>
    </Router>
  );
}

export default observer(App);
