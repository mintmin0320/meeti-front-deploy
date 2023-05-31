import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styled, { css } from "styled-components";
import { set } from "date-fns";
//test라우터

const Text = styled.div`
  color: #8165df;
  font-size: 15px;
  margin-top: 10px;
  ${css`
    &:after {
      content: "  >";
    }
  `}
`;
const TimeDiv = styled.div`
  display: flex;
`;
const TimeButton = styled.div`
  background: ${(backColor) => (backColor.timeTrue ? "#6f5cea" : "#ffffff")};
  border: 1px solid #6f5cea;
  border-radius: 5px;
  padding: 5px;
  color: ${(backColor) => (backColor.timeTrue ? "#ffffff" : "#6f5cea")};
  cursor: pointer;
  margin: 10px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${css`
    &:hover {
      background-color: #8165df;
      color: #ffffff;
    }
  `}
`;
const ReservationCom = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </div>
  ));
  //time

  const times = Array(14)
    .fill()
    .map((_, index) => {
      return 9 + index + ":00";
    });

  const [timeState, setTimeState] = useState("");
  const [timeArr, setTimeArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // const TimeBtnClickHandler = (e) => {
  //   const selectedTime = e.target.innerHTML;
  //   setTimeState(selectedTime);
  //   timeArr[times.indexOf(timeState)] = true;
  //   setTimeArr(timeArr);
  //   console.log("TimeArr Changed : " + timeArr);
  //   console.log("-----------------");
  // };

  const indexTime = (e) => {
    setTimeState(e.target.innerHTML);
    const idx = times.indexOf(timeState) + 1;
    timeArr[idx] = true;
    setTimeArr([...timeArr]);
    console.log(timeArr);
  };
  return (
    <>
      <Text>예약일자 </Text>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy년 MM월 dd일"
        customInput={<ExampleCustomInput />}
      />
      <Text>예약시간 </Text>
      <TimeDiv>
        <div
          className={timeArr[0] ? "timeTrue" : "timeFalse"}
          onClick={indexTime}
        >
          {times[0]}
        </div>
        <TimeButton onClick={indexTime}>{times[1]}</TimeButton>
        <TimeButton onClick={indexTime}>{times[2]}</TimeButton>
        <TimeButton onClick={indexTime}>{times[3]}</TimeButton>
      </TimeDiv>
      <TimeDiv>
        <TimeButton>{times[4]}</TimeButton>
        <TimeButton>{times[5]}</TimeButton>
        <TimeButton>{times[6]}</TimeButton>
        <TimeButton>{times[7]}</TimeButton>
      </TimeDiv>
      <TimeDiv>
        <TimeButton>{times[8]}</TimeButton>
        <TimeButton>{times[9]}</TimeButton>
        <TimeButton>{times[10]}</TimeButton>
        <TimeButton>{times[11]}</TimeButton>
      </TimeDiv>
      <TimeDiv>
        <TimeButton>{times[12]}</TimeButton>
        <TimeButton>{times[13]}</TimeButton>
      </TimeDiv>
    </>
  );
};

export default ReservationCom;
