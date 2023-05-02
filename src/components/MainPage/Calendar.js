import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";

const Main = styled.div`
  width: 800px;
  height: 800px;
  margin-top: 100px;
  margin-left: 100px;
  padding: 100px;
  border-radius: 10px;
  border: 0.8px solid #595959;
`;

const Calendar = () => {
  return (
    <Main>
      <FullCalendar
        defaultView="dayGridPlugin"
        plugins={[dayGridPlugin]}
        weekends={true}
        events={[
          { title: "event1", date: "2023-04-01" },
          { title: "event2", date: "2023-04-09" },
          { title: "event3", start: "2023-04-12", end: "2023-04-14" },
        ]}
        editable={true}
        droppable={true}
      />
    </Main>
  );
};
export default Calendar;
