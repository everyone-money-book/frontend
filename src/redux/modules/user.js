import { createAction, handleActions } from "redux-actions"; //액션과 리듀서를 편하게 만들어 준다.
import { produce } from "immer"; //불변성 관리 편하게
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import { apis, loginApi, singUpApi } from "../../lib/axios";

// action
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const USERINFO = 'user/USERINFO';

// action creator
const setLogin = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));
const userInfo = createAction(LOGIN, (user) => ({ user }));

// initialState
const initialState = {
  user: {
    username: "",
    password: "",
    sex: "",
    age: "",
    job: "",
    salary: ""
  },
	is_login: false,
};

// Thunk function
// 회원가입
const signUpAPI = (username, password, sex, age, job, salary) => {
	return function (dispatch, getState, { history }) {

    const data = {
      username: username,
      password: password,
      sex: sex,
      age: age,
      job: job,
      salary: salary
    };

    console.log(data);

		singUpApi
			.signUp(data)
			.then((res) => {
        console.log("회원가입 성공");
        window.alert("회원가입 성공");
        //로그인 화면으로 이동
        history.push("/login");
			})
			.catch((err) => {
        console.log("회원가입 실패");
        window.alert("회원가입 실패");
        console.log(err.code, err.message);
			});
	};
};



// 로그인 체크
const loginCheckAPI = () => {
  return function (dispatch, getState, { history }) {
    const mytoken = localStorage.getItem('token')

    apis.getUserInfo(mytoken).then((res) => {
      console.log("헤더에 토큰있으면 불러오는 데이터: ", res);
      dispatch(
        setLogin({
          username: res.data.object.username,
        })
      );
    });
  };
};




// 로그인
const setLoginDB = (username, password) => {
	return function (dispatch, getState, { history }) {
    const data= `username=${username}&password=${password}`
		loginApi
			.login(data)
			.then((res) => {
        console.log("로그인 res ", res);
        // 키에 데이터 쓰기
				localStorage.setItem('token',  res.data.token);
        // 리덕스에 유저정보 저장
				dispatch(loginCheckAPI())
        history.replace('/');
        window.location.reload();
        // 키로 부터 데이터 읽기
        console.log(localStorage.getItem('token'));
			})
			.catch((err) => {
        console.log(err.code, err.message);
				window.alert('로그인에 실패하였습니다!');
			});
	};
};


// 로그아웃
const logoutAPI = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    dispatch(logOut());
    history.replace("/");
    window.location.reload();
  };
};





// reducer
export default handleActions(
	{
		[LOGIN]: (state, action) =>
			produce(state, (draft) => {
				draft.user = action.payload.user;
				draft.is_login = true;
			}),
		[LOGOUT]: (state, action) =>
			produce(state, (draft) => {
				draft.user = null;
				draft.is_login = false;
			}),
		[USERINFO]: (state, action) =>
			produce(state, (draft) => {
				draft.user = action.payload.user;
				draft.email = action.payload.email;
			}),
	},
	initialState,
);

const actionCreators = {
  signUpAPI,
	setLoginDB,
	logoutAPI,
  loginCheckAPI
};

export { actionCreators };