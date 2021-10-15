import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://13.124.241.254",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json", 
    "X-AUTH-TOKEN":localStorage.getItem('X-AUTH-TOKEN')
    // 'content-type': 'application/json;charset=UTF-8',
    // accept: 'application/json',
  },
  withCredentials: true,
});



instance.interceptors.request.use(function (config) {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
	return config;
});

export const apis = {
  // 게시물 불러오기
  getPost: (id) => instance.get('/posts', id),
  // 게시물 작성하기
  createContents: (contents) => instance.post("/api/records", contents),
  // 게시물 수정하기
  updateContents: (id, content) => instance.put(`/api/records`, content),
  // 게시물 삭제하기
  deleteContents: (id) => instance.delete(`/api/records`),

  signUp: (data) => instance.post("/api/users", data),
};

// 로그인
const instanceLogin = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://13.124.241.254",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": true,
    "content-type": "application/x-www-form-urlencoded",
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
