import styled, { css } from "styled-components";

export const DetailWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

// 우측 예약 form
export const ReservationForm = styled.form`
  width: 30%;
  height: 100%;
`;

export const Text = styled.h1`
  color: #8165df;
  font-size: 20px;
  margin-top: 18px;
  ${css`
    &:after {
      content: "  >";
    }
  `}
`;

export const Time = styled.input`
  width: 35%;
  margin: 10px;
`;

export const ReservationBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CautionBox = styled.div`
  width: 95%;
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 10px;
  padding: 10px;
  border: 0.5px solid #9c9c9c;
  background: #ffffff;
`;

export const CautionTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 10px;
`;

export const CautionText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #535571;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  width: 90%;
  height: 40px;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 6px;
  margin: 10px;
  margin-top: 20px;
  margin-left: 30px;
  color: #ffffff;
  background: #6f5cea;
  cursor: pointer;

  &:hover{
    background-color: #d8d8d8;
    color: #000;
  }
`;

// 좌측 회의실 info
export const InfoSection = styled.section`
  width: 70%;
  height: 100%;
`;

export const TopInfoBox = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-between;
`;

export const OfficeImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  background-color: red;
`;

export const PlaceName = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 10px;
`;

export const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Info = styled.p`
  width: 90%;
  font-size: 14px;
  color: #535571;
  margin: 8px;
`;