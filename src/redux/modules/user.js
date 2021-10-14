import { createAction, handleActions } from "redux-actions"; //액션과 리듀서를 편하게 만들어 준다.
import { produce } from "immer"; //불변성 관리 편하게
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import axios from "axios";
import { apis } from "../../lib/axios";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER"; //리덕스에 유저 정보 넣기

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
// const signupPostMiddleware = (userid, pwd, gender, age, job, salary) => {
//   return (dispatch, {history}) => {
//     apis
//       .createPost(userid, pwd, gender, age, job, salary)
//       .then(() => {
//         dispatch(getUser(user));
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

const signUpAPI = (username, password, sex, age, job, salary) => {
  return function (dispatch, getState, { history }) {
    console.log(username, password, sex, age, job, salary);

    const data = {
      username: username,
      password: password,
      sex: sex,
      age: age,
      job: job,
      salary: salary,
    };

    apis
      .signUp(data)
      .then((res) => {
        console.log(res);
        // const token = res.data.token;
        // localStorage.setItem("token", token);
        history.push("/login");
      })
      .catch((err) => console.log(err));

    // axios({
    //   method: "POST",
    //   url: "/user/signUp",
    //   data,
    // })
    //   .then(res => {
    //     console.log(res); // signup 정보 확인
    //     window.alert("축하합니다");
    //     history.push("/login");
    //   })
    //   .catch(err => {
    //     console.log("signupAPI에서 오류발생", err);
    //     window.alert("회원가입에 실패했습니다.");
    //   });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  signUpAPI,
};

export { actionCreators };
