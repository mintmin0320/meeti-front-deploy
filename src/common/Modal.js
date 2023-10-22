import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// fullcalendar-library
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Tooltip } from "react-tooltip";
import { fetchContactList } from '../api/schedule';

// styles
const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Modal = ({ friendId }) => {
  const userId = localStorage.getItem("userId");
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    getScheduleList();
  }, []);

  const getScheduleList = async () => {
    try {
      const res = await fetchContactList(userId, friendId);
      setScheduleList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ModalWrap>
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
    </ModalWrap>
  );
};

export default Modal;