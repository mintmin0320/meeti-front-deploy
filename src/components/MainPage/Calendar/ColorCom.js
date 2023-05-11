import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaSortDown } from "react-icons/fa";

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
const ColorCom = () => {
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

export default ColorCom;
