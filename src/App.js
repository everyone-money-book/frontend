// // import logo from './logo.svg';
// // import './App.css';
// import React from "react";
// import { Route, Switch } from "react-router-dom";

// import Header from "./components/Header";
// import Main from "./pages/Main";
// import AddAccount from './pages/AddAccount';
// import EditAccount from './pages/EditAccount';
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Users from "./User";

// import { useDispatch } from 'react-redux';
// import { actionCreators as userActions} from './redux/modules/user';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Route path="/" exact component={Main} />
//       <Route path="/add" exact component={AddAccount} />
//       <Route path="/edit/:recordId" exact component={EditAccount} />
//       <Route path="/login" exact component={Login} />
//       <Route path="/signup" exact component={Signup} />
//     </div>
//   );
// }

// export default App;







// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import AddAccount from './pages/AddAccount';
import EditAccount from './pages/EditAccount';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { getCookie, setCookie } from "./shared/Cookie";

function App() {

  const is_local = localStorage.getItem("MY_TOKEN") ? true : false;
  console.log('>>>', localStorage.getItem('X-AUTH-TOKEN'))

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