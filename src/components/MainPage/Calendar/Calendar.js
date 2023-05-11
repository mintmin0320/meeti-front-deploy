import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import data from "../../../data";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import MiniCalendar from "./MiniCalendar";
import AddContent from "./AddContent";

const Main = styled.div``;
const CalendarDiv = styled.div`
  width: 80%;
  height: 70%;
  border-radius: 10px;

  background-color: #f8f8f8;
`;
const AddCal = styled.div`
  width: 85%;
  height: 86%;
  border-radius: 10px;
  padding: 20px;
  background-color: #f8f8f8;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const CalBack = styled.div`
  width: 28px;
  height: 28px;

  background: #f0ebfa;
`;
const AddButton = styled.div`
  width: 32px;
  height: 32px;
  background: #f0ebfa;
  border-radius: 5px;
  cursor: pointer;
  color: #6f5cea;
  display: flex;
  align-items: center;
`;
const Calendar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Main className="Main">
      <Header>
        <AiOutlineCalendar
          className="AiOutlineCalendar"
          style={{ padding: "0" }}
        />
        <AddButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <BsPlusLg
            style={{ color: "#6f5cea", display: "inline-block" }}
          ></BsPlusLg>
        </AddButton>
      </Header>

      {isOpen ? (
        <CalendarDiv>
          <FullCalendar
            eventClick={(e) => {
              console.log(e); //클릭이벤트
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
            navLinks={true}
            eventLimit={true}
          />
        </CalendarDiv>
      ) : (
        <AddCal>
          <AddContent />
        </AddCal>
      )}
    </Main>
  );
};
export default Calendar;
