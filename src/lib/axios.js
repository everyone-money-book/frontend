import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://13.124.241.254/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
    // 'content-type': 'application/json;charset=UTF-8',
    // accept: 'application/json',
  },
});

// export const apisToken = axios.create({
//   baseURL: 'http://13.124.241.254/',
//   headers: {
//     token: localStorage.getItem('token'),
//     'content-type': 'application/json;charset=UTF-8',
//     accept: 'application/json',
//   },
// })

// const instanceLogin = axios.create({
//   // 기본적으로 우리가 바라볼 서버의 주소
//   baseURL: 'http://13.124.241.254/',
//   headers: {
// 		'Access-Control-Allow-Origin':'http://localhost:3000',
// 		"Access-Control-Allow-Credentials": true,
// 		'Content-Type': 'application/x-www-form-urlencoded'
//   },
// });

export const apis = {
  // 게시물 불러오기
  getPost: () => instance.get("/posts"),
  // 게시물 작성하기
  createPost: (contents) => instance.post("/posts", contents),
  // 게시물 수정하기
  editPost: (id, content) => instance.put(`/posts/${id}`, content),
  // 게시물 삭제하기
  delPost: (id) => instance.delete(`/posts/${id}`),

  signUp: (data) => instance.post("/api/users", data),
  signIn: (data) => instance.post("/user/logIn", data),
};

// export const login = {
// 	getPost: (contents) => instanceLogin.post('/user/login')
// }
