import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = (props) => {
  const dispatch = useDispatch();

  const [userid, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const Login = () => {
    if (userid === "" || pwd === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    
    dispatch(userActions.setLoginDB(userid, pwd));
  };
  return (
    <Box>
      <Container>
        <Word>로그인</Word>
        <Input
          placeholder="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          type="password"
        ></Input>
        <Button onClick={Login}>로그인하기</Button>
      </Container>
      <Container>
        {/* <Button style={{ background: "#f9e000" }}>카카오톡 로그인</Button> */}
        <Button style={{marginTop: '-100px', backgroundColor: '#e9ecef'}}>회원가입하기</Button>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: red;
  // width: 500px;
  // margin: auto;
`;

const Container = styled.div`
  height: 300px;
  width: 500px;
  border: 1xp solid;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  margin: 10px 0px;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 10px 0px;
  border-width: 0px;
  border-radius: 10px;
  background-color: #ffeecc;
`;

const Word = styled.h1`
  font-family: "Black And White Picture", sans-serif;
`;
export default Login;
