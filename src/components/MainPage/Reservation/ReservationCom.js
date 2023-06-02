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
  margin-top: 5px;
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
const CautionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Caution = styled.div`
  background: #ffffff;
  border: 0.5px solid #9c9c9c;
  width: 100%;
  height: 20%;
  margin-left: 30px;
  padding: 10px;
  margin-bottom: 10px;
`;
const CautionTitle = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 10px;
`;
const CautionText = styled.div`
  font-size: 12px;
  color: #535571;
  text-align: center;
  margin-bottom: 10px;
`;
const SubmitButton = styled.div`
  width: 90%;
  color: #ffffff;
  background: #6f5cea;
  border-radius: 2px;
  margin-top: 20px;
  margin: 10px;
  padding: 6px;
  text-align: center;
  margin-left: 30px;
  cursor: pointer;
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
  ]); //기본값
  const [timeArrAllFalse, setTimeArrAllFalse] = useState([
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
  ]); //전부 false 넣어주기

  // const TimeBtnClickHandler = (e) => {
  //   const selectedTime = e.target.innerHTML;
  //   setTimeState(selectedTime);
  //   timeArr[times.indexOf(timeState)] = true;
  //   setTimeArr(timeArr);
  //   console.log("TimeArr Changed : " + timeArr);
  //   console.log("-----------------");
  // };

  const [onClickCount, setOnClickCount] = useState(0);
  const [idx, setIdx] = useState();
  const indexTime = (e) => {
    setTimeState(e.target.innerHTML);
    // setOnClickCount(onClickCount + 1);

    // if (onClickCount === 0) {
    //   setIdx(times.indexOf(timeState) + 1);
    // } else {
    //   setIdx(times.indexOf(timeState));
    // }
    console.log(idx);
    setTimeArr(timeArrAllFalse);
    timeArr[idx] = !timeArr[idx];
    setTimeArr([...timeArr]);
    console.log(timeArr);
  };

  //submit

  const SubmitHandler = () => {
    const ReserDate =
      startDate.getMonth() + 1 + "월" + startDate.getDate() + "일";
    if (window.confirm(`${ReserDate} ${timeState} 시에 예약하시나요?`)) {
      window.alert("예약이 완료되었습니다.");
    }
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
        <div
          className={timeArr[1] ? "timeTrue" : "timeFalse"}
          onClick={indexTime}
        >
          {times[1]}
        </div>
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
      <CautionDiv>
        <Caution>
          <CautionTitle>예약시 주의사항</CautionTitle>
          <CautionText>
            박수, 연호, 환호, 고성 및 언쟁 등이 발생하는 회의는 예약을
            자제부탁드립니다.
          </CautionText>
          <CautionText>
            여러 회의들이 진행되는 장소입니다. 다음 이용자, 다른 회의에 방해가
            되지 않도록 배려와 양해부탁드립니다
          </CautionText>
          <CautionText>
            이용 수칙이 지켜지지 않는 경우, 재예약이 어려울 수 있습니다.
          </CautionText>

          <CautionText>
            주의사항을 숙지하지 않고 있는 불이익은 본인 부담으로 처리될 수
            있습니다.
          </CautionText>
        </Caution>
        <SubmitButton onClick={SubmitHandler}>예약하기</SubmitButton>
      </CautionDiv>
    </>
  );
};

export default ReservationCom;
