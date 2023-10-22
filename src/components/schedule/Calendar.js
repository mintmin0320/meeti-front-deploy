import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

// fullcalendar-library
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Tooltip } from "react-tooltip";

// icons
import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";

const TopBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #6f5cea;
`;

const Title = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  color: #6f5cea;
  font-size: 16px;
`;

const AddButtonBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #6f5cea;
  font-size: 14px;
`;

const NavigatorButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  color: #6f5cea;
  background: #f0ebfa;
  cursor: pointer;
`;

const CalendarWrap = styled.div`
  width: 90%;
  height: 80%;
  border-radius: 10px;
`;

const Calendar = ({
  scheduleList,
}) => {
  const navigator = useNavigate();

  return (
    <>
      <TopBox>
        <TitleBox>
          <AiOutlineCalendar className="true" style={{ padding: "0" }} />
          <Title>Calendar</Title>
        </TitleBox>
        <AddButtonBox>
          <NavigatorButton
            onClick={() => {
              navigator('/add-schedule');
            }}
          >
            <AiOutlinePlusCircle size='20px' />
          </NavigatorButton>
        </AddButtonBox>
      </TopBox>
      <CalendarWrap>
        <FullCalendar
          height='100%'
          eventClick={(e) => {
            console.log("클릭");
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
          initialView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          weekends={true}
          events={scheduleList}
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
            // alert(it.date.getDate());
            // console.log(it.date.getDate());
          }}
        />
      </CalendarWrap>
    </>
  );
};

export default Calendar;