import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useMinutes } from "../../hooks/context/MinutesContext";

// api
import { fetchGetMinutes } from '../../api/minutes';

// icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//styled
const MinutesDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const MinutesBox = styled.div`
  background-color: #fff;
  width: 90%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 6px;
`;

const MinutesContacts = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  display: flex;
`;

const MinutesDate = styled.div`
  color: #374957;
  font-size: 11px;
  margin-bottom: 8px;
`;

const MinutesTitle = styled.div`
  color: #374957;
  font-size: 16px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const MinutesContactsLeft = styled.div`
  width: 80%;
`;

const MinutesContactsRight = styled.div`
  width: 20%;
`;

const MinutesButton = styled.div`
  color: #8165df;
  background-color: #f0ebfa;
  padding: 10px;
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;
  width: 20%;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    color: #f0ebfa;
    background-color: #8165df;
  }
`;

const MinutesList = ({ setSelectedMinute }) => {
  const { minutesData, setMinutesData } = useMinutes();

  useEffect(() => {
    getMinutesList();
  }, []);

  const getMinutesList = async () => {
    try {
      const res = await fetchGetMinutes(1);

      if (!res || res.length === 0) {
        setMinutesData([]);

        return;
      }

      setMinutesData(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MinutesDiv>
      {minutesData && minutesData.map((minute) => (
        <MinutesBox key={minute.id}>
          <MinutesContacts >
            <MinutesContactsLeft>
              <MinutesDate>{minute.date}</MinutesDate>
              <MinutesTitle>{minute.title}</MinutesTitle>
            </MinutesContactsLeft>
            <MinutesContactsRight>
              <MinutesButton onClick={() => setSelectedMinute(minute)}>
                <BsFillArrowRightCircleFill />
              </MinutesButton>
            </MinutesContactsRight>
          </MinutesContacts>
        </MinutesBox>
      ))}
    </MinutesDiv>
  );
};

export default MinutesList;