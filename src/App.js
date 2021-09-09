import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Search from "./Components/Search";
import MoviePlay from "./Components/MoviePlay";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/movie">
            <MoviePlay />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path='/search'>
              <Search />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/'>
            <Login />
          </Route>  
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
