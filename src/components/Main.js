import React from "react";
import styled from "styled-components";
import color from "./../assets/color.png";

const MainDiv = styled.div`
  position: absolute;
  width: 1400px;
  height: 700px;

  margin-top: 78px;
  margin-left: 69px;
  margin-right: 69px;
  background: #f8f8f8;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  display: flex;
  flex-direction: row;
`;
const BackColor = styled.img`
  position: absolute;
  width: 548px;
  height: 503px;
  margin-left: 100px;
  margin-top: 100px;
  background: #f8f8f8;
`;

const Header = styled.div`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
`;
const Todays = styled.div`
  background: #f8f8f8;
  width: 30%;
`;
const Calendar = styled.div`
  background: #f8f8f8;
  width: 60%;
`;
const Main = () => {
  return (
    <MainDiv>
      {/* <BackColor src={color} style={{ opacity: 0.2 }} /> */}
      <Header></Header>
      <Todays>sadcfvcg</Todays>
      <Calendar></Calendar>
    </MainDiv>
  );
};

export default Main;
