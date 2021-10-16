// import React from "react";
// import styled from "styled-components";
// import { actionCreators as userActions } from "../redux/modules/user";
// import { useHistory } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import {contentsActions} from '../redux/modules/contents';

// const Mypage = (props) => {
//   const dispatch = useDispatch()

//   // 날짜 구하기
//   let today = new Date();

//   let year = today.getFullYear();
//   let month = ("0" + (today.getMonth() + 1)).slice(-2);
//   let day = ("0" + today.getDate()).slice(-2);

//   let lastDay = new Date(year,month,0).getDate();

//   let firstDate = year + "-" + month + "-01";
//   let lastDate = year + "-" + month + "-" + lastDay;

//   // console.log("날짜 구하기", dateString);


//   const getpage = () => {
//     console.log("버튼버튼", firstDate + lastDate)
//     dispatch(contentsActions.mypageAPI(firstDate, lastDate))
//   }

//   const mydate =  useSelector((state) => state.contents.mydate)
//   const leftmoney =  useSelector((state) => state.contents.leftmoney)
//   console.log("내정보", mydate)
//   console.log("남은돈", leftmoney)

//   React.useEffect(() => {
//     dispatch(contentsActions.mypageAPI(firstDate, lastDate));
//   }, [])   

//   return (
//     <div>
//       <Button onClick={getpage}></Button>

//       <Div>
//         <H2>나의 월급</H2>
//       </Div>
//       <Box>
//         <Used>
//           <span>교통비</span>
//         </Used>
//         <Used>
//           <span>식비</span>
//         </Used>
//         <Used>
//           <span>핸드폰 요금</span>
//         </Used>
//         <Used>
//           <span>데이트 비용</span>
//         </Used>
//       </Box>
//       <Div>
//         <H3>남은금액: </H3>
//       </Div>
//     </div>
//   );
// };

// const Button = styled.button`
//   width: 200px;
//   height: 50px;
//   margin-left: 40px;
//   margin-top: 40px;
//   background-color: pink;
//   border-radius: 10px;
// `;

// const Box = styled.div`
//   display: flex;
//   /* justify-content: center; */
//   align-items: center;
//   flex-direction: column;
//   border-top: 1px solid pink;
//   border-bottom: 1px solid pink;
//   height: 420px;
//   margin: 0px 50px;
//   font-family: "Black And White Picture", sans-serif;
// `;
// const Div = styled.div`
//   margin: 0px 0px;
//   font-size: 20px;
//   text-align: center;
// `;
// const H2 = styled.h2`
//   font-family: "Black And White Picture", sans-serif;
//   margin: 0px 0px 5px 0px;
// `;

// const H3 = styled.h2`
//   font-family: "Black And White Picture", sans-serif;
//   margin: 5px 0px;
// `;

// const Used = styled.span`
//   margin: 30px 0px 0px 0px;
// `;
// export default Mypage;








import React from "react";
import styled from "styled-components";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { contentsActions } from "../redux/modules/contents";

const Mypage = (props) => {
  const dispatch = useDispatch();

  // 날짜 구하기
  let today = new Date();

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  let lastDay = new Date(year, month, 0).getDate();

  let firstDate = year + "-" + month + "-01";
  let lastDate = year + "-" + month + "-" + lastDay;

  // console.log("날짜 구하기", dateString);

  const getpage = () => {
    console.log("버튼버튼", firstDate + lastDate);
    dispatch(contentsActions.mypageAPI(firstDate, lastDate));
  };

  const mydate = useSelector((state) => state.contents.myInfo.mydate);
  const leftmoney = useSelector((state) => state.contents.myInfo.leftmoney);

  React.useEffect(() => {
    dispatch(contentsActions.mypageAPI(firstDate, lastDate));
  }, []);

  return (
    <div>
      <Button onClick={getpage}></Button>

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
        <H3>남은금액: {leftmoney}</H3>
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
