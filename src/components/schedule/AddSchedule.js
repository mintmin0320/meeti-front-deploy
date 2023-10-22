import React from "react";
import { useNavigate } from 'react-router-dom';
import styled, { css } from "styled-components";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko";

import BackgroundPalette from './BackgroundPalette';

// icons
import { BiMinus, BiPlus } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";

// CSS
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// styles
const From = styled.form`
  width: 85%;
  height: calc(80% - 55px);
  display: flex;
  border-radius: 10px;
  padding: 20px;
  background-color: #F2EFFB;
`;

const LeftBox = styled.div`
  width: 50%;
  height: 100%;
`;

const TitleFont = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #535571;
  padding: 10px;
  ${css`
    &:after {
      content: "  >";
    }
  `}
`;

const RightBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.input`
  width: 75%;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  font-size: 20px;
  outline: none;
`;

const TimeBox = styled.div`
  width: 100%;
  display: flex;
`;

const Time = styled.input`
  width: 35%;
  margin: 10px;
`;

const PlaceInput = styled.input`
  width: 75%;
  height: 30px;
  padding: 5px;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  font-size: 19px;
  background: #ffffff;
  outline: none;
  margin-bottom: 23px;
`;

const ButtonBox = styled.div`
width: 75%;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin-top: 5px;
`;

const Button = styled.button`
  width: 111px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  background: #8165df;
  cursor: pointer;
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
  background: #fff;
  cursor: pointer;
`;

const AddSchedule = ({
  date,
  handleSubmit,
  handleChange,
  handleScheduleDate,
}) => {
  const navigator = useNavigate();

  return (
    <From onSubmit={handleSubmit}>
      <LeftBox>
        <TitleFont>날짜</TitleFont>
        <DateRange
          locale={ko}
          editableDateInputs={true}
          onChange={(item) => handleScheduleDate(item)}
          moveRangeOnFirstSelection={false}
          ranges={date}
          retainEndDateOnFirstSelection={true}
        />
      </LeftBox>
      <RightBox>
        <TitleFont>제목</TitleFont>
        <Title
          name='title'
          onChange={handleChange}
          required
        />
        <TitleFont>장소</TitleFont>
        <PlaceInput
          name='place'
          onChange={handleChange}
          required
        />
        <BackgroundPalette />
        <TitleFont>시간</TitleFont>
        <TimeBox>
          <Time
            type="time"
            name='initTime'
            onChange={handleChange}
            required
          />
          <BiMinus className="BiMinus" />
          <Time
            type="time"
            name='finishTime'
            onChange={handleChange}
            required
          />
        </TimeBox>
        <ButtonBox>
          <Button>
            <BiPlus style={{ color: "#ffffff", marginRight: "5px" }} />
            일정 추가
          </Button>
        </ButtonBox>
      </RightBox>
      <NavigatorButton
        type='button'
        onClick={() => {
          navigator('/');
        }}
      >
        <AiOutlineCalendar size='20px' />
      </NavigatorButton>
    </From>
  );
};

export default AddSchedule;
