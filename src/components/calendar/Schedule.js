import React from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";

const Schedule = () => {
  return (
    <>
      <Wrapper>
        <ScheduleBox>
          <ScheduleContacts>
            <ScheduleColor />
            <ScheduleTitle>박하민 이사님 점심 식사</ScheduleTitle>
            <SchedulePlace>
              <HiLocationMarker /> 고척돈가스
            </SchedulePlace>
          </ScheduleContacts>
        </ScheduleBox>
      </Wrapper>
    </>
  );
};

// style

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const ScheduleBox = styled.div`
  background-color: #fff;
  width: 90%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 6px;
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
  margin-bottom: 8px;
`;
const ScheduleTitle = styled.div`
  color: #374957;
  font-size: 11px;
  margin-bottom: 8px;
`;
const SchedulePlace = styled.div`
  color: #535571;
  font-size: 10px;
`;
export default Schedule;
