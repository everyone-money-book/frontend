import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import Button from "../elements/Button";
import { useHistory, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { contentsActions } from "../redux/modules/contents";
import user from "../redux/modules/user";
import Permit from '../shared/Permit';

const Calendar = (props) => {
  // const {history} = props;

  const dispatch = useDispatch();
  const history = useHistory();
  // const params = useParams();
  // const list_index = params.recordId;
  //console.log(list_index);

  // 가계부 리스트 가져오기
  const moneybook_list = useSelector((state) => state.contents.list);
  console.log("달력리스트", moneybook_list);

  // 유저 이름 가져오기
  // const me = useSelector((state) => state.user.user.username);
  // let cloned = Object.assign({}, me);
  // console.log("usernameState", me.username);

  let cloned = JSON.parse(JSON.stringify(useSelector((state) => state.user.user.username)));
  console.log("cloned.username", cloned);

  // 날짜 구하기
  let today = new Date();

  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  let dateString = year + "-" + month + "-" + day;

  console.log("날짜 구하기", dateString);

  // user.username

  const date = dateString;
  const category = `all`;
  const username = 'member2';
  // console.log("123123123123213",username)
  // res.data.object.username
  React.useEffect(() => {
    dispatch(contentsActions.getContentsAPI(date, category, cloned));
  }, []);

  const foo = (arg) => {
    console.log(arg);
    const title = arg.event._def.title;

    const account = moneybook_list.find((event) => {
      return event.title === title;
    });
    const id = arg.event._def.extendedProps.recordId;
    console.log(id);
    history.push(`/edit/${id}`);
  };

  const allEvent = moneybook_list.map((list, idx) => {
    return {
      title: list.title,
      date: list.date,
      id: list.id,
    };
  });
  console.log(allEvent);

  // const editPage = (e) => {
  //   const scheduleObj = e.event._def.extendedProps
  // }

  const openPage = (id, title) => {
    // setId(id);
    // setTitle(title);
    // console.log(id, title)
    history.push("/edit/" + id);
  };
  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="100%"
        expandRows="true"
        locale="ko"
        headerToolbar={{
          left: "",
          center: "title",
          right: "prev,today,next",
        }}
        dayMaxEvents="true"
        events={moneybook_list}
        eventClick={foo}
        //eventClick={(e) => openPage(e.event._def.extendedProps.recordId)}
        // eventClick={()=>history.push(`/edit/${recordId}`)}
        // eventClick={(e) => openModal(e.event.id, e.event.title)}
        // eventTimeFormat={{
        //   hour: "numeric",
        //   minute: "2-digit",
        //   meridiem: "short",
        // }}
      />
      <Permit>
      <Link to="/add">
        <AddButton>+</AddButton>
      </Link>
      </Permit>
    </Container>
  );
};
const Container = styled.div`
  height: 90%;
  width: 90%;
  a {
    cursor: pointer;
  }
  .fc-col-header-cell {
    background-color: #ced4da;
    color: #fff;
    &.fc-day-sat {
      background-color: #a5d8ff;
    }
    &.fc-day-sun {
      background-color: #ffa8a8;
    }
  }
`;
const AddButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  background-color: #f9e000;
  box-sizing: border-box;
  font-weight: 800;
  font-size: 38px;
  border: none;
  border-radius: 50px;
  color: #212121;
  z-index: 2;
  transition: all 0.3s linear;
  &:hover {
    transform: rotate(90deg);
    cursor: pointer;
  }
`;
export default Calendar;
