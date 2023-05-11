import React, { useState } from "react";
import styled, { css } from "styled-components";
import MiniCalendar from "./MiniCalendar";
import ColorCom from "./ColorCom";
const AddTitle = styled.input`
  font-size: 24px;
  border: none;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f8f8f8;
  //box-shadow: 3px 3px 10px #b3b3b3;
  width: 80%;
`;

const AddContent = () => {
  return (
    <>
      <AddTitle type="text" placeholder="일정 제목"></AddTitle>
      <ColorCom />
      <MiniCalendar />
    </>
  );
};

export default AddContent;
