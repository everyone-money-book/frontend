import React from "react";
import styled from "styled-components";
// import { Button, Grid, Input } from "../elements";
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

    if (username === "") {
      setError(0, "유저네임을 입력하세요");
      return;
    }
    if (!username.match(/^(?=.*?[a-z])(?=.*?[0-9]).{4,}$/)) {
      setError(0, "소문자/숫자 포함 4글자 이상 입력해주세요");
      return;
    }
    if (password === "") {
      setError(1, "비밀번호를 입력하세요");
      return;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      setError(
        1,
        "패스워드는 숫자 1개, 대문자 1개, 소문자 1개 이상을 포함하는 6~20자 이내여야 합니다"
      );
      return;
    }
    if (pwd_check === "") {
      setError(2, "비밀번호를 입력해주세요");
      return;
    }
    if (password !== pwd_check) {
      setError(2, "비밀번호가 일치하지 않습니다");
      return;
    }

    if (sex === "") {
      setError(3, "성별을 선택해주세요");
      return;
    }
    if (age === "") {
      setError(4, "나이를 입력해주세요");
      return;
    }
    if (job === "") {
      setError(5, "직업을 입력해주세요");
      return;
    }
    if (salary === "") {
      setError(6, "연봉을 입력해주세요");
      return;
    }

    console.log(username, password, sex, age, job, salary);
    dispatch(userActions.signUpAPI(username, password, sex, age, job, salary));
  };
  
  return (
    <Box>
      <H1>회원가입</H1>
      <Div>
        <Input
          class="fas fa-user"
          label="username"
          placeholder="유저네임을 입력해주세요."
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {/* <IdCheck onClick={() => alert("중복된 아이디 사용중!")}>
          중복확인
        </IdCheck> */}
      </Div>
      {checkArr[0] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {checkArr[1] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="pwd_check"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요"
        value={pwd_check}
        onChange={(e) => {
          setPwdCheck(e.target.value);
        }}
      />
      {checkArr[2] && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Select
        label="sex"
        value={sex}
        onChange={(e) => {
          setSex(e.target.value);
        }}
      >
        <option value="" disabled>
          성별을 선택해주세요
        </option>
        <option value="male">남자</option>
        <option value="female">여자</option>
      </Select>
      {checkArr[3] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="age"
        type="number"
        placeholder="나이를 입력해주세요."
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      {checkArr[4] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="job"
        placeholder="직업을 입력해주세요."
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      {checkArr[5] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="salary"
        type="number"
        placeholder="연봉을 입력해주세요."
        value={salary}
        onChange={(e) => {
          setSalary(e.target.value);
        }}
      />
      {checkArr[6] && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button text="회원가입하기" onClick={_Signup}>
        회원가입 하기
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
  height: 40px;
  margin: 10px 0px;
  border-radius: 10px;
  border: 3px solid pink;
  background-color: rgb(232, 240, 254);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Select = styled.select`
  width: 310px;
  height: 50px;
  margin: 10px 0px;
  border-radius: 10px;
  border: 3px solid pink;
  background-color: rgb(232, 240, 254);
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 10px 0px;
  border-width: 0px;
  border-radius: 10px;
  background-color: #ffeecc;
  cursor: pointer;
`;

const H1 = styled.h1`
  font-size: 32px;
  color: #222831;
  font-family: "Black And White Picture", sans-serif;
`;

const IdCheck = styled.button`
  width: 70px;
  height: 50px;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #ffeecc;
  cursor: pointer;
`;

const Div = styled.div`
  width: 400px;
  display: flex;
  padding-left: 90px;
`;
export default Signup;
