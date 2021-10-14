import React from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";

const Main = () => {
  return (
    <Container>
      <CalendarArea>
        <Calendar />
      </CalendarArea>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 90vh;
  width: 100vw;
`;

const CalendarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

// _openModal={() => openModal('modify')}
// _setModify={() => setModalType('modify')}
// allScheduleYn={allScheduleYn}
