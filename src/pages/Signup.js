import React from "react";
import styled from "styled-components";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [age, setAge] = React.useState("");
  const [job, setJob] = React.useState("");
  const [salary, setSalary] = React.useState("");

  const [errorMessage, setErrorMessage] = React.useState("");
  const [checkArr, setCheckArr] = React.useState(Array(7).fill(false));

  const setError = (index, message) => {
    setErrorMessage(message);
    let tempArr = Array(7).fill(false);
    tempArr[index] = true;
    setCheckArr(tempArr);
  };

  const _Signup = () => {
    // 에러 메시지 초기화
    setCheckArr(Array(7).fill(false));
    setErrorMessage("");

    if (username === "") setError(0, "please enter your username");
    else if (password === "") setError(1, "please enter your password");
    else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))
      setError(
        1,
        "패스워드는 숫자 1개, 대문자 1개, 소문자 1개 이상을 포함하는 6~20자 이내여야 합니다"
      );
    else if (pwd_check === "") setError(2, "please enter your password");
    else if (sex === "") setError(3, "please enter your gender");
    else if (age === "") setError(4, "please enter your age");
    else if (job === "") setError(5, "please enter your job");
    else if (salary === "") setError(6, "please enter your salary");
    else if (password !== pwd_check)
      setError(2, "please check the password one more");

    console.log(username, password, sex, age, job, salary);
    dispatch(userActions.signUpAPI(username, password, sex, age, job, salary));
  };

  return (
    <Box>
      <H1>Join</H1>

      <Input
        label="username"
        placeholder="please enter your username."
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      {checkArr[0] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="password"
        type="password"
        placeholder="please enter your password."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {checkArr[1] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="password"
        type="password"
        placeholder="please check the password"
        value={pwd_check}
        onChange={(e) => {
          setPwdCheck(e.target.value);
        }}
      />
      {checkArr[2] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="sex"
        placeholder="please enter your jender."
        value={sex}
        onChange={(e) => {
          setSex(e.target.value);
        }}
      />
      {checkArr[3] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="age"
        type="number"
        placeholder="please enter your age."
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      {checkArr[4] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="job"
        placeholder="please enter your job."
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      {checkArr[5] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="salary"
        placeholder="please enter your salary."
        value={salary}
        onChange={(e) => {
          setSalary(e.target.value);
        }}
      />
      {checkArr[6] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button text="회원가입하기" onClick={_Signup}>
        Join
      </Button>
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

// const Container = styled.div`
//   height: 300px;
//   width: 500px;
//   border: 1xp solid;
//   border-radius: 10px;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
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
`;

const H1 = styled.h1`
  font-size: 32px;
`;

export default Signup;
