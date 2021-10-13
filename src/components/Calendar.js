import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';
import Button from "../elements/Button";
import { useHistory, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Calendar = (props) => {
  const dispatch  = useDispatch();
  const history = useHistory();
 // const params = useParams();
 // const list_index = params.recordId;
  const moneybook_list = useSelector((state) => state.contents.list);
  //console.log(list_index);


  
  const foo = (arg) => {
    console.log(arg);
    const title = arg.event._def.title

    const account = moneybook_list.find(event => {
      return event.title === title
    })
    console.log(account.recordId);
    history.push(`/edit/${account.recordId}`);
  }


  const allEvent = moneybook_list.map((list, idx) => {
    return {
      title: list.title,
      data: list.data,
      id: list.recordId
    }
  });
  console.log(allEvent);

  // const editPage = (e) => {
  //   const scheduleObj = e.event._def.extendedProps
  // }

  const openPage = (id, title) => {
    // setId(id);
    // setTitle(title);
    // console.log(id, title)
    history.push('/edit/'+id)
  }
  return (
    <Container>
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        height= "100%"
        expandRows="true"
        locale="ko"
        headerToolbar= {{
          left: '',
          center: 'title',
          right: 'prev,today,next',
        }}
        dayMaxEvents= "true"
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
      <Link to="/add">
        <AddButton>+</AddButton>
      </Link>
    </Container>
  )
}
const Container = styled.div`
  height: 90%;
  width : 90%;
    a {
      cursor: pointer;
    }
  .fc-col-header-cell {
    background-color: #CED4DA;
    color: #fff;
    &.fc-day-sat {
      background-color: #A5D8FF;
    }
    &.fc-day-sun {
      background-color: #FFA8A8;
    }
  }
`
const AddButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  background-color: #F9E000;
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
export default Calendar
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// const events = [
//   {
//     id: 1,
//     title: 'event 1',
//     start: '2021-06-14T10:00:00',
//     end: '2021-06-14T12:00:00',
//   },
//   {
//     id: 2,
//     title: 'event 2',
//     start: '2021-06-16T13:00:00',
//     end: '2021-06-16T18:00:00',
//   },
//   { id: 3, title: 'event 3', start: '2021-06-17', end: '2021-06-20' },
// ];
// function FullCalendarApp() {
//   return (
//     <div className="App">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           center: 'dayGridMonth,timeGridWeek,timeGridDay new',
//         }}
//         customButtons={{
//           new: {
//             text: 'new',
//             click: () => console.log('new event'),
//           },
//         }}
//         events={events}
//         eventColor="red"
//         nowIndicator
//         dateClick={(e) => console.log(e.dateStr)}
//         eventClick={(e) => console.log(e.event.id)}
//       />
//     </div>
//   );
// }
// export default FullCalendarApp;