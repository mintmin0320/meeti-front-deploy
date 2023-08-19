import React, { useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko"; // 날짜 포맷 라이브러리 (한국어 기능을 임포트)

import BackgroundPalette from './BackgroundPalette';

// hook
import { useColor } from '../../hooks/context/colorContext';

// icon, library-CSS
import { BiMinus, BiSearch, BiPlus } from "react-icons/bi";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// CSS
const AddTitle = styled.input`
  font-size: 24px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f8f8f8;
  //box-shadow: 3px 3px 10px #b3b3b3;
  width: 80%;
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

const AddOther = styled.form`
  display: flex;
`;

const Left = styled.div`
  width: 60%;
`;

const Right = styled.div`
  width: 40%;
`;

const TimeDiv = styled.div`
  display: flex;
  width: 100%;
`;

const Time = styled.input`
  width: 40%;
  margin: 10px;
`;

const PlaceButton = styled.div`
  width: 117px;
  height: 23px;
  background: #ffffff;
  border: 0.5px solid #535571;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  display: flex;
`;

const PlaceText = styled.div`
  font-size: 11px;
  line-height: 13px;
  margin: 5px;
  color: #535571;
`;

const SubmitButton = styled.button`
  width: 111px;
  height: 33px;
  background: #8165df;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-top: 20px;
`;

const SummitButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 80px;
`;

const AddSchedule = (props) => {
  const { color } = useColor();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  console.log(startTime)
  console.log(endTime)
  const handleOnChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setList();
  };

  const setSchedule = (item) => {
    setState([item.selection]);

    if (item.selection.endDate !== null) {
    }
  };

  const setList = async () => {
    const url = `https://${process.env.REACT_APP_SERVER_URI}/schedule/set-schedule`;
    const data = {
      title: title,
      color,
      start: state[0].startDate,
      end: state[0].endDate,
    };
    try {
      const res = await axios.post(url, data);
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log();
    }
  };

  return (
    <AddOther onSubmit={handleOnSubmit}>
      <Left>
        <AddTitle
          onChange={(e) => handleOnChange(e)}
          placeholder="일정 제목"
          required={true}
        />
        <TitleFont>날짜</TitleFont>
        <DateRange
          locale={ko}
          editableDateInputs={true}
          onChange={(item) => setSchedule(item)}
          moveRangeOnFirstSelection={false}
          ranges={state}
          retainEndDateOnFirstSelection={true}
        />
      </Left>
      <Right>
        <BackgroundPalette />
        <TitleFont>시간</TitleFont>
        <TimeDiv>
          <Time type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <BiMinus className="BiMinus" />
          <Time type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </TimeDiv>
        <TitleFont>장소</TitleFont>
        <PlaceButton>
          <BiSearch className="BiSearch" />
          <PlaceText>회의실 예약하기</PlaceText>
        </PlaceButton>
        <SummitButtonDiv>
          <SubmitButton
            type="submit"
            onClick={() => console.log(state, title)}
          >
            <BiPlus
              style={{ color: "#ffffff", marginRight: "5px" }}
            ></BiPlus>
            일정 추가
          </SubmitButton>
        </SummitButtonDiv>
      </Right>
    </AddOther>
  );
};

export default AddSchedule;

