// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import AddAccount from './pages/AddAccount';
import EditAccount from './pages/EditAccount';
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Route path="/" exact component={Main}/>
      <Route path="/add" component={AddAccount}></Route>
      <Route path="/edit/:id" component={EditAccount}></Route> */}

      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/add" exact component={AddAccount} />
      <Route path="/edit/:id" exact component={EditAccount} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </div>
  );
}

export default App;
