import axios from "axios";
// 13.124.241.254 원래주소
// 13.209.17.103 임시주소
const mytoken = localStorage.getItem('token')
// CRUD AXIOS
const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://13.124.241.254",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    // "X-AUTH-TOKEN":`Bearer ${mytoken}`
    // "Content-Type": "application/json", 
  },
  withCredentials: true,
});

// instance.defaults.headers.common[
//   "X-AUTH-TOKEN"
// ] = `Bearer ${localStorage.getItem('token')}`;

// instance.interceptors.request.use(function (config) {
// 	const accessToken = document.cookie.split('=')[1];
// 	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
// 	return config;
// });

export const apis = {
  // 게시물 불러오기
  getCalendar: (contents, token) => instance.get('/api/records'+ contents, {headers:{"X-AUTH-TOKEN": token}} ),
  // 게시물 작성하기
  createContents: (contents, token) => instance.post("/api/records", contents, {headers:{"X-AUTH-TOKEN": token}}),
  // 게시물 수정하기
  updateContents: (content, token) => instance.put(`/api/records`, content, {headers:{"X-AUTH-TOKEN": token}}),
  // 게시물 삭제하기
  deleteContents: (recordId, token) => instance.delete(`/api/records`,{data:{recordId}, headers:{"X-AUTH-TOKEN": token}}),
  // 유저정보 가져오기
  getUserInfo: (token) => instance.get("/api/users", {headers:{"X-AUTH-TOKEN": token}}),
  //마이페이지
  getMyPage: (contents, token) => instance.post('/api/mypage', contents, {headers:{"X-AUTH-TOKEN": token}} ),
};


// 회원가입 AXIOS
const instanceSingUp = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://13.124.241.254",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json", 
    // "X-AUTH-TOKEN":localStorage.getItem('X-AUTH-TOKEN')
    // 'content-type': 'application/json;charset=UTF-8',
    // accept: 'application/json',
  },
  withCredentials: true,
});

  // 회원가입
  export const singUpApi = {
    signUp: (data) => instanceSingUp.post("/api/users", data),

    
  }


// 로그인AXIOS
const instanceLogin = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://13.124.241.254",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": true,
    "content-type": "application/x-www-form-urlencoded",
    "X-AUTH-TOKEN":`Bearer ${localStorage.getItem('token')}`
  },
});

// 로그인
export const loginApi = {
  login: (data) =>
    instanceLogin.post("/api/users/login", data,  {
      withCredentials: true
}),
};

export const apisToken = axios.create({
  baseURL: "http://13.124.241.254",
  headers: {
    token: localStorage.getItem("token"),
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": true,
    "content-type": "application/x-www-form-urlencoded",

    // 'content-type': 'application/json;charset=UTF-8',
    // accept: 'application/json',
  },
});

// const handleLogin = () => {
//   axios
//     .post(
//       `${EndPoint.APIServer}/myauth/login/`,
//       { profile: { username: username, password: password } },
//       { withCredentials: true }
//     )
//     .then((response) => {
//       console.log(response);
//       console.log(response.data);
//     });
// };
