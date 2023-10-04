/*
  달력 좌측 일정 확인 컴포넌트
  - 장소, 일정 이름이 표시됨
  - default 모든 일정
  - 특정 날짜 클릭 시 해당 날짜 일정만 출력되도록 react query 사용 예정
*/

import React, { useState, useEffect } from "react";
import styled from "styled-components";

// icons
import { HiLocationMarker } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

// apis
import { fetchGetSchedule, fetchDeleteSchedule } from '../../api/schedule';

// styles
const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

const ScheduleBox = styled.div`
  background-color: #fff;
  width: 90%;
  height: 90px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 6px 6px 15px 6px;
`;

const ScheduleContacts = styled.div`
  margin-top: 6px;
  margin-left: 6px;
`;

const ScheduleTimeBox = styled.div`
  display: flex;
  align-items: center;

`;

const ScheduleTime = styled.div`
  font-size: 11px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const ScheduleColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6f5cea;
`;

const ScheduleTitle = styled.div`
  color: #374957;
  font-size: 14px;
  margin-bottom: 11px;
`;

const SchedulePlace = styled.div`
  color: #535571;
  font-size: 10px;
`;

const ScheduleDeleteBox = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ScheduleDeleteBtn = styled.div`
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 18px;
  background-color: #d8d8d8;
  border-radius: 8px;
  cursor: pointer;
`;

const ScheduleList = () => {
  const userId = localStorage.getItem('userId');
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    getScheduleList();
  }, []);

  const getScheduleList = async () => {
    try {
      const res = await fetchGetSchedule(userId);
      setScheduleList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnDeleteBtn = async (scheduleId) => {
    try {
      const res = await fetchDeleteSchedule(scheduleId);

      if (res.data) {
        alert('일정 삭제 성공!');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {scheduleList.map((schedule) => (
        <ScheduleBox key={schedule.id}>
          <ScheduleContacts>
            <ScheduleTimeBox>
              <ScheduleColor />
              <ScheduleTime>
                {schedule.initTime} ~ {schedule.finishTime}
              </ScheduleTime>
            </ScheduleTimeBox>
            <ScheduleTitle>{schedule.title}</ScheduleTitle>
            <SchedulePlace>
              <HiLocationMarker />
              {schedule.place}
            </SchedulePlace>
            <ScheduleDeleteBox>
              <ScheduleDeleteBtn
                onClick={() => handleOnDeleteBtn(schedule.id)}
              >
                <AiFillDelete />
              </ScheduleDeleteBtn>
            </ScheduleDeleteBox>
          </ScheduleContacts>
        </ScheduleBox>
      ))}
    </Wrapper>
  );
};

export default ScheduleList;
