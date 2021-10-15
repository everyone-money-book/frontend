// import { createAction, handleActions } from "redux-actions"; //액션과 리듀서를 편하게 만들어 준다.
// import { produce } from "immer"; //불변성 관리 편하게
// import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
// import axios from "axios";
// import { apis } from "../../lib/axios";
// import { loginApi } from "../../lib/axios";


// // actions
// const LOG_OUT = "LOG_OUT";
// const GET_USER = "GET_USER";
// const SET_USER = "SET_USER"; //리덕스에 유저 정보 넣기

// // action creators
// const logOut = createAction(LOG_OUT, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));
// const setUser = createAction(SET_USER, (user) => ({ user }));

// // initialState
// const initialState = {
//   user: null,
//   is_login: false,
// };

// // middleware actions
// // const signupPostMiddleware = (userid, pwd, gender, age, job, salary) => {
// //   return (dispatch, {history}) => {
// //     apis
// //       .createPost(userid, pwd, gender, age, job, salary)
// //       .then(() => {
// //         dispatch(getUser(user));
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   };
// // };

// // 회원가입
// const signUpAPI = (username, password, sex, age, job, salary) => {
//   return function (dispatch, getState, { history }) {
//     console.log(username, password, sex, age, job, salary);

//     const data = {
//       username: username,
//       password: password,
//       sex: sex,
//       age: age,
//       job: job,
//       salary: salary
//     };

//     apis
//       .signUp(data)
//       .then((res) => {
//         console.log(res);
//         // dispatch(
//         //   setUser({
//         //     username: user.user.displayName,
//         //     id: id,
//         //     user_profile: "",
//         //     uid: user.user.uid,
//         //   })
//         // const token = res.data.token;
//         // localStorage.setItem("token", token);
//         history.push("/login");
//       })
//       .catch((err) => console.log(err));

//     // axios({
//     //   method: "POST",
//     //   url: "/user/signUp",
//     //   data,
//     // })
//     //   .then(res => {
//     //     console.log(res); // signup 정보 확인
//     //     window.alert("축하합니다");
//     //     history.push("/login");
//     //   })
//     //   .catch(err => {
//     //     console.log("signupAPI에서 오류발생", err);
//     //     window.alert("회원가입에 실패했습니다.");
//     //   });
//   };
// };

// // 로그인
// const signInAPI = (username, password) => {
//   return function (dispatch, getState, { history }) {
//     const data= `username=${username}&password=${password}`
//     // const data = {
//     //   username: username,
//     //   password: password,
//     // };
//     console.log(data);

//     loginApi
//       .signIn(data)
//       .then((res) => {
//         console.log(res);
//         setCookie('token', res.data[1].token, 7);
//         localStorage.setItem('username', res.data[0].username);
//         dispatch(getUser({ username: username }));
// 				history.replace('/');
//         // alert("로그인되었습니다."); // const token = res.data.token
//         // history.push("/");
//         // localStorage.setItem("token", token)
//         // dispatch(signIn(uid))
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };





// // reducer
// export default handleActions(
//   {
//     [SET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         setCookie("is_login", "success");
//         draft.user = action.payload.user;
//         draft.is_login = true;
//       }),
//     [LOG_OUT]: (state, action) =>
//       produce(state, (draft) => {
//         deleteCookie("is_login");
//         draft.user = null;
//         draft.is_login = false;
//       }),
//     [GET_USER]: (state, action) => produce(state, (draft) => {}),
//   },
//   initialState
// );

// // action creator export
// const actionCreators = {
//   logOut,
//   getUser,
//   signUpAPI,
//   signInAPI
// };

// export { actionCreators };










// import { createAction, handleActions } from "redux-actions"; //액션과 리듀서를 편하게 만들어 준다.
// import { produce } from "immer"; //불변성 관리 편하게
// import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
// import axios from "axios";
// import { apis } from "../../lib/axios";
// import { loginApi } from "../../lib/axios";



import { createAction, handleActions } from "redux-actions"; //액션과 리듀서를 편하게 만들어 준다.
import { produce } from "immer"; //불변성 관리 편하게
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import { apis, loginApi } from "../../lib/axios";

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

		apis
			.signUp(data)
			.then((res) => {
				history.push('/login');
			})
			.catch((err) => {
				window.alert('이미 존재하는 아이디 또는 이메일입니다.');
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
        console.log(res)
				localStorage.setItem('X-AUTH-TOKEN', res.data.object);
        let user = {username, password}
				dispatch(setLogin({ user }));
        window.alert('로그인 되었습니다!');
        history.replace('/');
			})
			.catch((err) => {
				window.alert('없는 회원정보 입니다! 회원가입을 해주세요!');
			});
	};
};








const logOutDB = () => {
	return function (dispatch, getState, { history }) {
		deleteCookie('token');
		localStorage.removeItem('username');
		dispatch(logOut());
		history.replace('/login');
	};
};


const isLogin  = () => {
	return function (dispatch, getState, { history }) {
		const token = localStorage.getItem('X-AUTH-TOKEN');
    if (!token) {
      return false;
		} 
    let user = token
    dispatch(setLogin(user))
	};
};

// const userInfoDB = () => {
// 	return function (dispatch, getState, { history }) {
// 		apis
// 			.userInfo()
// 			.then((res) => {
// 				dispatch(userInfo({ id: res.data.username, email: res.data.email }));
// 			})
// 			.catch((err) => {
// 				return err;
// 			});
// 	};
// };

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
	logOutDB,
	isLogin

};

export { actionCreators };