import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import data from "../../../data";
import { BsPlusLg } from "react-icons/bs";
import {
  AiOutlineCalendar,
  AiOutlineUserAdd,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import AddContent from "./AddContent";
import { Tooltip } from "react-tooltip";

const Main = styled.div``;
const CalendarDiv = styled.div`
  width: 80%;
  height: 70%;
  border-radius: 10px;

  background-color: #f8f8f8;
`;
const AddCal = styled.div`
  width: 85%;
  height: 84%;
  border-radius: 10px;
  padding: 20px;
  background-color: #f8f8f8;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const HeadTitle = styled.div`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;
const HeaderRight = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 100px;
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
  justify-content: center;
  margin: 5px;
`;
const SearchButton = styled.div`
  width: 32px;
  height: 32px;
  background: #f0ebfa;
  border-radius: 5px;
  cursor: pointer;
  color: #6f5cea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
const Calendar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Main className="Main">
      <Header>
        <Header>
          <AiOutlineCalendar className="true" style={{ padding: "0" }} />
          <HeadTitle>Calendaer</HeadTitle>
        </Header>
        <HeaderRight>
          <SearchButton>
            <AiOutlineUserAdd />
          </SearchButton>

          <AddButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <AiOutlinePlusCircle /> : <AiOutlineCalendar />}
          </AddButton>
        </HeaderRight>
      </Header>

      {isOpen ? (
        <CalendarDiv>
          <FullCalendar
            eventClick={(e) => {
              console.log("클릭"); //클릭이벤트
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
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            weekends={true}
            events={data} //data에 모든 이벤트 입력
            editable={true}
            navLinks={true}
            eventLimit={true}
            eventRender={(events) => {
              Tooltip(events.el, {
                title: events.title,
                placement: "top",
                trigger: "click",
                container: "body",
              });
            }}
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
