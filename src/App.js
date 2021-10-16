import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import AddAccount from './pages/AddAccount';
import EditAccount from './pages/EditAccount';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { actionCreators as userActions } from "./redux/modules/user";
import { useDispatch } from "react-redux";
import Mypage from "./pages/Mypage";

function App() {

const dispatch = useDispatch();  
const is_local = localStorage.getItem('token') ? true : false;
React.useEffect(() => {
  if (is_local) {
    dispatch(userActions.loginCheckAPI());
  }

}, []);

  // console.log('>>>', localStorage.getItem('token'))

  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/add" exact component={AddAccount} />
      <Route path="/edit/:id" exact component={EditAccount} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/mypage" exact component={Mypage} />
    </div>
  );
}

export default App;