// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// // 액션
// const CREATE = "contents/CREATE";
// const UPDATE = "contents/UPDATE";
// const DELETE = "contents/DELETE";


// const initialState = {
//   list: [
//     // {"recordId":1,"category":"식비","cost":8000,"contents":"OO국밥","year" : 2021,"month" : 10,"date":11},
//     {
//       recordId: 1,
//       title: "식비 OO국밥 8000",
//       cost: 8000,
//       contents: "OO국밥",
//       date: "2021-10-14",
//       backgroundColor: "#FAA2C1",
//     },
//     {
//       recordId: 2,
//       title: "교통비 택시비 8000",
//       cost: 8000,
//       contents: "교통비 ㅎ",
//       date: "2021-10-14",
//       backgroundColor: "#E599F7",
//     },
//     {
//       recordId: 3,
//       title: "주거비 월세 8000",
//       cost: 8000,
//       contents: "월세월세",
//       date: "2021-10-14",
//       backgroundColor: "#66D9E8",
//     },
//     {
//       recordId: 4,
//       title: "뷰티 및 패션 옷가게 8000",
//       cost: 8000,
//       contents: "뷰티패션",
//       date: "2021-10-14",
//       backgroundColor: "#63E6BE",
//     },
//     {
//       recordId: 5,
//       title: "취미활동 CGV 8000",
//       cost: 8000,
//       contents: "OO국밥",
//       date: "2021-10-14",
//       backgroundColor: "#FFE066",
//     },
//   ]
// };

// // {
// //   /* <option value="식비">식비</option>
// // <option value="교통비">교통비</option>
// // <option value="주거비">주거비</option>
// // <option value="뷰티 및 패션">뷰티 및 패션</option>
// // <option value="취미활동">취미활동</option> */
// // }

// // 액션 생성자
// export function createContents(contents) {
//   console.log("액션을 생성할거야!");
//   return { type: CREATE, contents: contents };
// }
// export function deleteContents(contents_index) {
//   console.log("지울 버킷 인덱스", contents_index);
//   return { type: DELETE, contents_index };
// }

// export function updateContents(updateData) {
// 	console.log('수정할거야 ~');
// 	return { type: UPDATE, updateData};
// }

// // Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     // do reducer stuff
//     case CREATE: {
//       console.log("이제 값을 바꿀꺼야!");
//       const new_contents_list = [...state.list, action.contents];
//       return { list: new_contents_list };
// 	}
// 	// case UPDATE: {
// 	// 	console.log("이제 값을 수정할거야!");
// 	// 	let update_contents = state.list.map((contents) => 
// 	// 	contents.id === action.word.id? {...contents, ...action.contents} : contents
// 	// 	);
// 	// 	const new_contents_list = [...state.list, action.contents];
// 	// 	return { list: new_contents_list };
// 	//   }
// 	case UPDATE: {
// 		// console.log('UPDATE')
// 		const new_contents_list = state.list.map((list, idx) => {
// 		  if(parseInt(action.updateData.recordId) === idx) {
// 			return{...list, ...action.updateData.updateData};
// 		  } else {
// 			return list;
// 		  }
// 		});
// 		console.log({...action.updateData.updateData}, '...action')
// 		console.log(new_contents_list, 'UPDATE')
// 		return {...state, list: new_contents_list};
// 	  }
//     case DELETE: {
//       console.log(state, action);
//       const new_contents_list = state.list.filter((l, idx) => {
//         // console.log(parseInt(action.bucket_index) !== idx, parseInt(action.bucket_index), idx);
// 		return parseInt(action.contents_index) !== idx;
// 	  });
//       console.log(new_contents_list);
//       return { list: new_contents_list };
//     }
//     default:
//       return state;
//   }
// }














import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

// 액션
// const CREATE = "contents/CREATE";
// const UPDATE = "contents/UPDATE";
// const DELETE = "contents/DELETE";

const GET = "GET";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

const getCalendar = createAction(GET, (post_list) => ({post_list}));
const createContents = createAction(CREATE, (contents) => ({ contents }));
const updateContents = createAction(UPDATE, (updateData, contents_index) => ({
  updateData,
  contents_index,
}));
const deleteContents = createAction(DELETE, (contents_index) => ({
  contents_index,
}));

const initialState = {
  list: [
    // {"recordId":1,"category":"식비","cost":8000,"contents":"OO국밥","year" : 2021,"month" : 10,"date":11},
    // {
    //   recordId: 1,
    //   title: "식비 OO국밥 8000",
    //   cost: 8000,
    //   contents: "OO국밥",
    //   date: "2021-10-14",
    //   backgroundColor: "#FAA2C1",
    // },
    // {
    //   recordId: 2,
    //   title: "교통비 택시비 8000",
    //   cost: 8000,
    //   contents: "교통비 ㅎ",
    //   date: "2021-10-14",
    //   backgroundColor: "#E599F7",
    // },
    // {
    //   recordId: 3,
    //   title: "주거비 월세 8000",
    //   cost: 8000,
    //   contents: "월세월세",
    //   date: "2021-10-14",
    //   backgroundColor: "#66D9E8",
    // },
    // {
    //   recordId: 4,
    //   title: "뷰티 및 패션 옷가게 8000",
    //   cost: 8000,
    //   contents: "뷰티패션",
    //   date: "2021-10-14",
    //   backgroundColor: "#63E6BE",
    // },
    // {
    //   recordId: 5,
    //   title: "취미활동 CGV 8000",
    //   cost: 8000,
    //   contents: "OO국밥",
    //   date: "2021-10-14",
    //   backgroundColor: "#FFE066",
    // },
  ],
};

{
  /* <option value="식비">식비</option>
<option value="교통비">교통비</option>
<option value="주거비">주거비</option>
<option value="뷰티 및 패션">뷰티 및 패션</option>
<option value="취미활동">취미활동</option> */
}
// 액션 생성자
// export function createContents(contents) {
//   console.log("액션을 생성할거야!");
//   return { type: CREATE, contents: contents };
// }
// export function deleteContents(contents_index) {
//   console.log("지울 버킷 인덱스", contents_index);
//   return { type: DELETE, contents_index };
// }

// export function updateContents(updateData) {
// 	console.log('수정할거야 ~');
// 	return { type: UPDATE, updateData};
// }

//action creators 액션 생성 함수
// const createPost = createAction(CREATE, (contents) => ({ contents }));
// const deletePost = createAction(DELETE, (contents_index) => ({
//   contents_index,
// }));
// const updatePost = createAction(UPDATE, (updateData) => ({ updateData }));




//미들웨어
// 불러오기
// const getContentsAPI = (date) => {
//   return function (dispatch, getState, {history}) {
//       apis
//           .getPost({
//               params: {
//                   date: date
//               }
//           })
//           .then((res) => {
//               if(res.status >= 400){
//                   showError(res.status,res.data.msg);
//                   history.push('/error');
//                   return;
//               }
//               const _post_list = res
//               console.log("리스폰스", _post_list);
//               const post_list = res.data;
//               console.log("리스폰스데이터", post_list);
//               dispatch(setContent(post_list));
//           })
//           .catch((err) => {
//               console.log("로드에러", err)
//           })
//       }
// };


//추가
const createContentsAPI = (contents) => {
  return function (dispatch, getState, { history }) {

    // const contents = {
    //   date: contents,
    //   category: category,
    //   cost: cost,
    //   contents: contents,
    // };
    console.log("post넘겨받기", contents);

    apis
      .createContents(contents)
      .then(res => {
        console.log(res);
        // const post = res.data
        // dispatch(addPost(post));
        history.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  };
};


// export const createContentsAPI = (date, category, cost, contents) => {
//   return function (dispatch, getState, { history }) {
//     //console.log(date, category, cost, contents);

//     // const formData = new FormData();   // 이름을 image가 아니라 file로 보내기?
//     // formData.append('date', post.date);
//     // formData.append('category', post.category);
//     // formData.append('cost', post.cost);
//     // formData.append('contents', post.contents);
//     const data = {
//       date: date,
//       category: category,
//       cost: cost,
//       contents: contents,
//     };

//     //const _token = localStorage.getItem('X-AUTH-TOKEN');
//     // const token = 
//     //   {headers : 
//     //     {"X-AUTH-TOKEN" : localStorage.getItem('X-AUTH-TOKEN')},
//     //   }
 


//     apis
//       .createContents(data)
//       .then(res => {
//         Axios.defaults.headers.common['Authorization'] = `Bearer ${res.payload.accessToken}`
//       })
//       .then((res) => {
//         console.log(res);
//         // const token = res.data.token;
//         // localStorage.setItem("token", token);
//         history.push("/");
//       })
//       .catch((err) => console.log(err));
//   };
// };

//삭제
export const deleteContentsAPI = (id) => async (
  dispatch,
  getState,
  { history }
) => {
  try {
    await apis.deleteContents(id);
    history.replace("/");
  } catch (e) {
    console.log(e);
  }
};

//수정
export const editContentsAPI = (id, content) => async (
  dispatch,
  getState,
  { history }
) => {
  try {
    await apis.updateContents(id, content);
    dispatch(updateContents(id, content));
    history.goBack();
  } catch (e) {
    console.log(e);
  }
};

// Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     // do reducer stuff
//     case CREATE: {
//       console.log("이제 값을 바꿀꺼야!");
// 	  const new_contents_list = [...state.list, action.contents];
// 	  console.log(new_contents_list);
// 	  return { list: new_contents_list };
// 	}
// 	// case UPDATE: {
// 	// 	console.log("이제 값을 수정할거야!");
// 	// 	let update_contents = state.list.map((contents) =>
// 	// 	contents.id === action.word.id? {...contents, ...action.contents} : contents
// 	// 	);
// 	// 	const new_contents_list = [...state.list, action.contents];
// 	// 	return { list: new_contents_list };
// 	//   }
// 	case UPDATE: {
// 		// console.log('UPDATE')
// 		const new_contents_list = state.list.map((list, idx) => {
// 		  if(parseInt(action.updateData.id) === idx) {
// 			return{...list, ...action.updateData.updateData};
// 		  } else {
// 			return list;
// 		  }
// 		});
// 		return {...state, list: new_contents_list};
// 	  }
//     case DELETE: {
//       console.log(state, action);
//       const new_contents_list = state.list.filter((l, idx) => {
//         // console.log(parseInt(action.bucket_index) !== idx, parseInt(action.bucket_index), idx);
// 		return parseInt(action.contents_index) !== idx;
// 	  });
//       console.log(new_contents_list);
//       return { list: new_contents_list };
//     }
//     default:
//       return state;
//   }
// }

// //reducer
export default handleActions(
  {
    [CREATE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.contents);
      }),
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.id === action.payload.contents_index
        );

        draft.list[idx] = { ...draft.list[idx], ...action.payload.updateData };
      }),
    [DELETE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.filter((p) => p.id !== action.payload.contents_index);
      }),
  },
  initialState
);

const contentsActions = {
  // getContentsAPI,
  createContentsAPI,
  createContents,
  updateContents,
  deleteContents,
};

export { contentsActions };
