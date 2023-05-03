import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";

const Main = styled.div`
  width: 85%;
  height: 86%;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`;

const Calendar = () => {
  return (
    <Main className="Main">
      <FullCalendar
        headerToolbar={{
          start: "",
          center: "title",
          end: "today prev,next",
        }}
        buttonText={{
          today: "today",
          month: "month",
          week: "week",
          day: "day",
          list: "list",
        }}
        locale={"ko"}
        defaultView="dayGridPlugin"
        plugins={[dayGridPlugin]}
        weekends={true}
        events={[
          { title: "event1", date: "2023-05-01", color: "#6F5CEA" },
          { title: "event2", date: "2023-05-09", color: "#76CAF8" },
          {
            title: "event3",
            start: "2023-05-12",
            end: "2023-05-14",
            color: "#F5CB72",
          },
        ]}
        editable={true}
        droppable={true}
      />
    </Main>
  );
};
export default Calendar;
