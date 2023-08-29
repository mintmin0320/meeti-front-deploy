/*
  일정 날자 선택할 경우 setScheduleDate 코드 수정 필요
*/

import React, { useState } from "react";
import styled, { css } from "styled-components";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko"; // 날짜 포맷 라이브러리 (한국어 기능을 임포트)

import BackgroundPalette from './BackgroundPalette';
import { setSchedule } from '../../api/schedule';

// hooks
import { useColor } from '../../hooks/context/colorContext';

// icons, library-CSS
import { BiMinus, BiPlus } from "react-icons/bi";

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
  width: 45%;
  height: 520px;

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

const TimeDiv = styled.div`
  display: flex;
  width: 100%;
`;

const Time = styled.input`
  width: 40%;
  margin: 10px;
`;

const PlaceInput = styled.input`
  width: 90%;
  height: 25px;
  background: #ffffff;
  border: 0.5px solid #535571;
  border-radius: 5px;
  margin: 10px;
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

const KaKaoMapBox = styled.div`
  width: 100%;
  height: 210px;
  background: #8165df;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1500px) {
    height: 320px;
  }
`;

const SummitButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const AddSchedule = () => {
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
  const [place, setPlace] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      color,
      start: state[0].startDate,
      end: state[0].endDate,
    };

    try {
      const res = await setSchedule(data);

      console.log(res);
      window.location.reload(); // 수정 필요
    } catch (error) {
      console.log(error);
    }
  };

  // 리팩토링 필요
  const setScheduleDate = (item) => {
    setState([item.selection]);

    console.log(item)

    if (item.selection.endDate !== null) {
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
          onChange={(item) => setScheduleDate(item)}
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
        <PlaceInput />
        <KaKaoMapBox>지도 자리</KaKaoMapBox>
        <SummitButtonDiv>
          <SubmitButton
            type="submit"
            onClick={() => console.log(state, title)}
          >
            <BiPlus
              style={{ color: "#ffffff", marginRight: "5px" }}
            />
            일정 추가
          </SubmitButton>
        </SummitButtonDiv>
      </Right>
    </AddOther>
  );
};

export default AddSchedule;
