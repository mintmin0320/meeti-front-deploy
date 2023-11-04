import { useNavigate } from 'react-router-dom';

// fullcalendar-library
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Tooltip } from "react-tooltip";

import * as S from './styles/Calendar.style';

import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";

const Calendar = ({
  scheduleList,
}) => {
  const navigator = useNavigate();

  return (
    <>
      <S.TopBox>
        <S.TitleBox>
          <AiOutlineCalendar className="true" style={{ padding: "0" }} />
          <S.Title>Calendar</S.Title>
        </S.TitleBox>
        <S.AddButtonBox>
          <S.NavigatorButton
            onClick={() => {
              navigator('/add-schedule');
            }}
          >
            <AiOutlinePlusCircle size='20px' />
          </S.NavigatorButton>
        </S.AddButtonBox>
      </S.TopBox>
      <S.CalendarWrap>
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
        />
      </S.CalendarWrap>
    </>
  );
};

export default Calendar;