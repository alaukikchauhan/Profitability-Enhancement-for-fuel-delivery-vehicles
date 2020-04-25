import React from 'react';
import Login from "./components/login.jsx"
import Dashboard from "./components/dashboard.jsx"
import TruckInfo from "./components/truckinfo.jsx"
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
        <Route path='/' exact component ={Login} />
        <Route path='/dashboard' exact component ={Dashboard} />
        <Route path='/truckinfo' exact component ={TruckInfo} />
      </Router>
  );
}

export default App;
