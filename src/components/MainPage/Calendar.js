import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import data from "../../data";

const Main = styled.div`
  width: 85%;
  height: 86%;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`;

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Main className="Main">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        버튼
      </button>
      {isOpen ? (
        <FullCalendar
          eventClick={() => {
            console.log("클릭!"); //클릭이벤트
          }}
          droppable={true}
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
          events={data} //data에 모든 이벤트 입력
          editable={true}
        />
      ) : null}
    </Main>
  );
};
export default Calendar;
