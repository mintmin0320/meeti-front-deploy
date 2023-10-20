import styled from 'styled-components';

export const OfficeItem = styled.div`
  width: 95%;
  height: 120px;
  display: flex;
  justify-content: center;
  border: solid 2px #d8d8d8;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const OfficeImgBox = styled.div`
  width: 40%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OfficeImg = styled.img`
  width: 95%;
  height: 110px;
  margin: auto;
  border-radius: 10px;
  object-fit: cover;
`;

export const OfficeInfoBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;


export const ReservationDate = styled.p`
  color: #535571;
  font-size: 12px;
  margin-top: 8px;
  margin-left: 5px;
  margin-bottom: 4px;
`;

export const ReservationTime = styled.div`
  width: 75%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8165df;
  font-size: 13px;
  border: 1px solid #8165df;
  border-radius: 50px;
  background: #f8f8f8;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const ReservationPlace = styled.p`
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 7px;
  font-size: 14px;
`;

export const ReservationTel = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3px;
`;

export const SubOptionTelNum = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-left: 5px;
  color: #8165df;
`;