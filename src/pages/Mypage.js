import React from "react";
import styled from "styled-components";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const Mypage = (props) => {
  return (
    <div>
      <Button></Button>

      <Div>
        <H2>나의 월급</H2>
      </Div>
      <Box>
        <Used>
          <span>교통비</span>
        </Used>
        <Used>
          <span>식비</span>
        </Used>
        <Used>
          <span>핸드폰 요금</span>
        </Used>
        <Used>
          <span>데이트 비용</span>
        </Used>
      </Box>
      <Div>
        <H3>남은금액</H3>
      </Div>
    </div>
  );
};

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 40px;
  margin-top: 40px;
  background-color: pink;
  border-radius: 10px;
`;

const Box = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  border-top: 1px solid pink;
  border-bottom: 1px solid pink;
  height: 420px;
  margin: 0px 50px;
  font-family: "Black And White Picture", sans-serif;
`;
const Div = styled.div`
  margin: 0px 0px;
  font-size: 20px;
  text-align: center;
`;
const H2 = styled.h2`
  font-family: "Black And White Picture", sans-serif;
  margin: 0px 0px 5px 0px;
`;

const H3 = styled.h2`
  font-family: "Black And White Picture", sans-serif;
  margin: 5px 0px;
`;

const Used = styled.span`
  margin: 30px 0px 0px 0px;
`;
export default Mypage;
