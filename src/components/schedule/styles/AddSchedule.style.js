import styled, { css } from "styled-components";

export const From = styled.form`
  width: 85%;
  height: calc(80% - 55px);
  display: flex;
  border-radius: 10px;
  padding: 20px;
  background-color: #F2EFFB;
`;

export const LeftBox = styled.div`
  width: 50%;
  height: 100%;
`;

export const TitleFont = styled.div`
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

export const RightBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.input`
  width: 75%;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  font-size: 20px;
  outline: none;
`;

export const TimeBox = styled.div`
  width: 100%;
  display: flex;
`;

export const Time = styled.input`
  width: 35%;
  margin: 10px;
`;

export const PlaceInput = styled.input`
  width: 75%;
  height: 30px;
  padding: 5px;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  font-size: 19px;
  background: #ffffff;
  outline: none;
  margin-bottom: 23px;
`;

export const ButtonBox = styled.div`
width: 75%;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 111px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  background: #8165df;
  cursor: pointer;
`;

export const NavigatorButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  color: #6f5cea;
  background: #fff;
  cursor: pointer;
`;