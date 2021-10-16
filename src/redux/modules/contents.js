import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const GET = "GET";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const GET_USERINFO = "GET_USERINFO";

const getCalendar = createAction(GET, (post_list) => ({post_list}));
const createContents = createAction(CREATE, (contents) => ({ contents }));
const updateContents = createAction(UPDATE, (updateData, contents_index) => ({
  updateData,
  contents_index,
}));
const deleteContents = createAction(DELETE, (contents_index) => ({
  contents_index,
}));
const createMyInfo = createAction(GET_USERINFO, (myInfo) => ({ myInfo }));

const initialState = {
  list: [
    // {"recordId":1,"category":"식비","cost":8000,"contents":"OO국밥","year" : 2021,"month" : 10,"date":11},
    // {
    //   recordId: 1,
    //   title: "식비 OO국밥 8000",
    //   cost: 8000,
    //   contents: "OO국밥",
    //   date: "2021-10-14",
    //   category: '식비',
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
  myInfo: {
    leftmoney: "",
    mydate: "",
  },
};


// 받기
const getContentsAPI = (date, category, username) => {
  return function (dispatch, getState, { history }) {
    const mytoken = localStorage.getItem('token')
    // console.log("usernameusername>>>", username)
    // console.log("datedate>>", date)
    // console.log("categorycategory>>>", category)
    apis
    .getCalendar(`?date=${date}&category=${category}&username=${username}`, mytoken )
    .then ((res) => {
      const post_list = res.data.object.records
      for(let i=0; i < post_list.length; i++) {
        const title = `${post_list[i].category} ${post_list[i].contents} ${post_list[i].cost}`
        post_list[i].title = title;
      }
      console.log("데이터받기",post_list);
      dispatch(getCalendar(post_list));
      // .set("title", title)
    })
    .catch((err) => {
      console.error(err);
    })
  }
}


//추가
const createContentsAPI = (contents) => {
  return function (dispatch, getState, { history }) {
    const mytoken = localStorage.getItem('token')

    // const contents = {
    //   date: contents,
    //   category: category,
    //   cost: cost,
    //   contents: contents,
    // };
    console.log("post넘겨받기", contents);

    apis
      .createContents(contents, mytoken)
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

// 게시글 수정
const editContentsAPI = (recordId, date, category, cost, contents ) => {
  console.log("post_id", contents);
  return async function (dispatch, getState, {history}) {
    const mytoken = localStorage.getItem('token')
    const contents_data = {
      recordId : recordId,
      date: date,
      category: category,
      cost: cost,
      contents: contents
    }
    // console.log("contents_data>>>>>>>>>>>",contents_data);
    apis
    .updateContents(contents_data, mytoken)
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


// post 삭제
const deleteContentsAPI = (post_id) => {
  console.log("post_id", post_id);
  return function (dispatch, getState, { history }) {
    const mytoken = localStorage.getItem('token')
    console.log("token", mytoken)
    const recordId = post_id
    apis
      .deleteContents(recordId, mytoken)
      .then((res) => {
        history.replace("/");
        window.location.reload();
        })
      .catch((err) => {
        console.error(err);
      });
  };
};


// 마이페이지
const mypageAPI = (firstDate, lastDate) => {
  return function (dispatch, getState, { history }) {
    const mytoken = localStorage.getItem('token')
    const contents = {
      startDate:firstDate, 
      endDate:lastDate
    }
    apis
      .getMyPage(contents, mytoken)
      .then((res) => {
        console.log("getMyPage", res)
        const leftmoney = (res.data.object.leftMoney)
        const mydate = (res.data.object.records)
        console.log(leftmoney);
        console.log(mydate);
       
        // dispatch(getmydate(mydate, ));
        })
      .catch((err) => {
        console.error(err);
      });
  }
}


//reducer
export default handleActions(
  {
    [GET]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
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
    [GET_USERINFO]: (state, action) =>
      produce(state, (draft) => {
        draft.myInfo = action.payload.myInfo;
      }),
  },
  initialState
);

const contentsActions = {
  getContentsAPI,
  createContentsAPI,
  deleteContentsAPI,
  editContentsAPI,
  createContents,
  updateContents,
  deleteContents,
  mypageAPI,
};

export { contentsActions };




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

// //삭제
// export const deleteContentsAPI = (id) => async (
//   dispatch,
//   getState,
//   { history }
// ) => {
//   try {
//     await apis.deleteContents(id);
//     history.replace("/");
//   } catch (e) {
//     console.log(e);
//   }
// };

// //수정
// export const editContentsAPI = (id, content) => async (
//   dispatch,
//   getState,
//   { history }
// ) => {
//   try {
//     await apis.updateContents(id, content);
//     dispatch(updateContents(id, content));
//     history.goBack();
//   } catch (e) {
//     console.log(e);
//   }
// };