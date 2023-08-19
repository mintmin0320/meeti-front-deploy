import React, { useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko"; // 날짜 포맷 라이브러리 (한국어 기능을 임포트)

// icon, library-CSS
import { BiMinus, BiSearch, BiPlus } from "react-icons/bi";
import { FaSortDown } from "react-icons/fa";

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

const AddOther = styled.div`
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

const ColorPick = styled.div`
  width: 51px;
  height: 18px;
  background: ${(props) => props.color || "black"};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  cursor: pointer;
`;

const ColorText = styled.div`
  font-size: 8px;
  color: white;
  padding: 3px;
`;

const ColorsDiv = styled.div`
  width: 220px;
  height: 19px;
  background: #ffffff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  margin: 5px;
  display: flex;
`;

const Color = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 4px;
  cursor: pointer;
  ${(props) =>
    props.color1 &&
    css`
      background-color: #ef888b;
    `}
  ${(props) =>
    props.color2 &&
    css`
      background-color: #f1a175;
    `}
    ${(props) =>
    props.color3 &&
    css`
      background-color: #f6c77a;
    `}
    ${(props) =>
    props.color4 &&
    css`
      background-color: #bedb84;
    `}
    ${(props) =>
    props.color5 &&
    css`
      background-color: #81c7ba;
    `}
    ${(props) =>
    props.color6 &&
    css`
      background-color: #9ad8dd;
    `}
    ${(props) =>
    props.color7 &&
    css`
      background-color: #a4c8e8;
    `}
    ${(props) =>
    props.color8 &&
    css`
      background-color: #548ff7;
    `}
    ${(props) =>
    props.color9 &&
    css`
      background-color: #de9fd6;
    `}
    ${(props) =>
    props.color10 &&
    css`
      background-color: #8165df;
    `}
    ${(props) =>
    props.color11 &&
    css`
      background-color: #df84a7;
    `}
    ${(props) =>
    props.color12 &&
    css`
      background-color: #535571;
  `}
`;

const AddSchedule = (props) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setData();
  };

  const setSchedule = (item) => {
    setState([item.selection]);

    if (item.selection.endDate !== null) {
    }
  };

  const setData = async () => {
    const url = `https://${process.env.REACT_APP_SERVER_URI}/schedule/set-schedule`;
    const data = {
      title: title,
      color: "#ef888b",
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

  // colorComponent
  const BackgroundPalette = () => {
    const [colorDiv, setColorDiv] = useState(false);
    const [colorState, setColorState] = useState("#8165df");
    const onClickColor = (e) => {
      setColorState(e.target.id);
    };
    return (
      <>
        <ColorPick
          color={colorState}
          onClick={() => {
            setColorDiv(!colorDiv);
          }}
        >
          <ColorText />
          <ColorText>컬러</ColorText>
          <FaSortDown style={{ color: "white" }} />
        </ColorPick>
        <ColorsDiv>
          <Color id="#ef888b" color1 onClick={onClickColor} />
          <Color id="#f1a175" color2 onClick={onClickColor} />
          <Color id="#f6c77a" color3 onClick={onClickColor} />
          <Color id="#bedb84" color4 onClick={onClickColor} />
          <Color id="#81c7ba" color5 onClick={onClickColor} />
          <Color id="#9ad8dd" color6 onClick={onClickColor} />
          <Color id="#a4c8e8" color7 onClick={onClickColor} />
          <Color id="#548ff7" color8 onClick={onClickColor} />
          <Color id="#de9fd6" color9 onClick={onClickColor} />
          <Color id="#8165df" color10 onClick={onClickColor} />
          <Color id="#df84a7" color11 onClick={onClickColor} />
          <Color id="#535571" color12 onClick={onClickColor} />
        </ColorsDiv>
      </>
    );
  };

  return (
    <>
      <form>
        <AddOther>
          <Left>
            {/* <form onSubmit={handleOnSubmit}> */}
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
              <Time type="time" />
              <BiMinus className="BiMinus" />
              <Time type="time" />
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
      </form>
    </>
  );
};

export default AddSchedule;

