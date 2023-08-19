/*
  일정을 조회할 수 있는 달력
  서버와의 통신 작업을 진행하며 수정할 필요가 있음
*/

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Tooltip } from "react-tooltip";

import { getSchedule } from '../../apis/schedule';
import AddContent from "./AddSchedule";

// icon, dummy-data
import { AiOutlineCalendar, AiOutlineUserAdd, AiOutlinePlusCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import data from "../../data";

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
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const res = await getSchedule();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main className="Main">
      <Header>
        <Header>
          <AiOutlineCalendar className="true" style={{ padding: "0" }} />
          <HeadTitle>Calendar</HeadTitle>
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
            locale={"en"}
            initialView="dayGridMonth"
            plugins={[dayGridPlugin, interactionPlugin]}
            weekends={true}
            // events={schedule} //data에 모든 이벤트 입력
            events={data} //data에 모든 이벤트 입력
            editable={true}
            navLinks={false}
            eventLimit={true}
            eventRender={(events) => {
              Tooltip(events.el, {
                title: events.title,
                placement: "top",
                trigger: "click",
                container: "body",
              });
            }}
            eventAdd={() => { }} //event 추가될 때 실행되는 이벤트
            eventChange={() => { }} //event 수정될 떄 실행되는 이벤트
            eventRemove={() => { }} //event 삭제될 때 실행되는 이벤트
            titleFormat={(date) => {
              const year = date.date.year;
              const month = date.date.month + 1;
              return year + "년 " + month + "월";
            }}
            dateClick={(it) => {
              alert(it.date.getDate());
              console.log(it.date.getDate());
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
