/*
  달력 좌측 일정 확인 컴포넌트
  - 장소, 일정 이름이 표시됨
  - default 모든 일정
  - 특정 날짜 클릭 시 해당 날짜 일정만 출력되도록 react query 사용 예정
*/

import React from "react";
import styled from "styled-components";

// icon, dummy-data
import { HiLocationMarker } from "react-icons/hi";

import scheduleData from './scheduleData.json';

// CSS
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  };
`;

const ScheduleBox = styled.div`
  background-color: #fff;
  width: 90%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 6px 6px 15px 6px;
`;

const ScheduleContacts = styled.div`
  margin-top: 8px;
  margin-left: 8px;
`;

const ScheduleColor = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background-color: #6f5cea;
  margin-bottom: 11px;
`;

const ScheduleTitle = styled.div`
  color: #374957;
  font-size: 12px;
  margin-bottom: 11px;
`;

const SchedulePlace = styled.div`
  color: #535571;
  font-size: 10px;
`;

const ScheduleList = () => {
  return (
    <Wrapper>
      {
        scheduleData.map((item) => {
          return (
            <ScheduleBox key={item.ScheduleId}>
              <ScheduleContacts>
                <ScheduleColor />
                <ScheduleTitle>{item.ScheduleTittle}</ScheduleTitle>
                <SchedulePlace>
                  <HiLocationMarker />
                  {item.SchedulePlace}
                </SchedulePlace>
              </ScheduleContacts>
            </ScheduleBox>
          )
        })
      }
    </Wrapper>
  );
};

export default ScheduleList;
