import styled, { css } from "styled-components";

export const ColorPick = styled.div`
  width: 51px;
  height: 18px;
  background: ${(props) => props.color || "black"};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  cursor: pointer;
`;

export const ColorText = styled.div`
  font-size: 8px;
  color: white;
  padding: 3px;
`;

export const ColorsDiv = styled.div`
  width: 220px;
  height: 19px;
  background: #ffffff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  margin: 15px;
  display: flex;
`;

export const Color = styled.div`
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