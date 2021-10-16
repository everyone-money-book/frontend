import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const is_local = localStorage.getItem('token') ? true : false;


  if (is_local && is_login) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};

export default Permit;
