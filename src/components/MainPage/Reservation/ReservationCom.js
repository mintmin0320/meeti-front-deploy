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

  const [timeState, setTimeState] = useState([]);
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

  const [onClickCount, setOnClickCount] = useState(0);
  const [idx, setIdx] = useState();

  //test
  const [check0, setCheck0] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);

  //submit

  const SubmitHandler = () => {
    const ReserDate =
      startDate.getMonth() + 1 + "월" + startDate.getDate() + "일";
    if (window.confirm(`${ReserDate} 에 예약하시나요?`)) {
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
          className={check0 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck0(!check0);
          }}
          value={times[0]}
        >
          {times[0]}
        </div>
        <div
          className={check1 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck1(!check1);
          }}
          value={times[1]}
        >
          {times[1]}
        </div>
        <div
          className={check2 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck2(!check2);
          }}
          value={times[2]}
        >
          {times[2]}
        </div>
        <div
          className={check3 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck3(!check3);
          }}
          value={times[3]}
        >
          {times[3]}
        </div>
      </TimeDiv>
      <TimeDiv>
        <div
          className={check4 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck4(!check4);
          }}
          value={times[4]}
        >
          {times[4]}
        </div>
        <div
          className={check5 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck5(!check5);
          }}
          value={times[5]}
        >
          {times[5]}
        </div>
        <div
          className={check6 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck6(!check6);
          }}
          value={times[6]}
        >
          {times[6]}
        </div>
        <div
          className={check7 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck7(!check7);
          }}
          value={times[7]}
        >
          {times[7]}
        </div>
      </TimeDiv>
      <TimeDiv>
        <div
          className={check8 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck8(!check8);
          }}
          value={times[8]}
        >
          {times[8]}
        </div>
        <div
          className={check9 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck9(!check9);
          }}
          value={times[9]}
        >
          {times[9]}
        </div>
        <div
          className={check10 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck10(!check10);
          }}
          value={times[10]}
        >
          {times[10]}
        </div>
        <div
          className={check11 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck11(!check11);
          }}
          value={times[11]}
        >
          {times[11]}
        </div>
      </TimeDiv>
      <TimeDiv>
        <div
          className={check12 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck12(!check12);
          }}
          value={times[12]}
        >
          {times[12]}
        </div>
        <div
          className={check13 ? "timeTrue" : "timeFalse"}
          onClick={() => {
            setCheck13(!check13);
          }}
          value={times[13]}
        >
          {times[13]}
        </div>
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
