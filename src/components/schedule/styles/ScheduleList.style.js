import styled from "styled-components";

export const ScheduleItem = styled.div`
  width: 90%;
  height: 95px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  margin-top: 7px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const TimeBox = styled.div`
  width: 70%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-left: 8px;
`;

export const IconColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6f5cea;
`;

export const Time = styled.p`
  font-size: 11px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Title = styled.p`
  height: 35px;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: #374957;
`;

export const BottomBox = styled.div`
  width: calc(100% - 8px);
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
`;

export const PlaceBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #535571;
  margin-left: 8px;
  font-size: 12px;
`;

export const DeleteButtonBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  background-color: #d8d8d8;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #6f5cea;
    color: #fff;
  }
`;