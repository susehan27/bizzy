import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar";
import {Provider} from "react-redux";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Timer from "./pages/Timer";
import User from "./pages/User";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <div className="App">
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/task" component={Task}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/timer" component={Timer}></Route>
        </Switch>
      </div>
    </Router>
    </div>
  </Provider>
);


export default App;
