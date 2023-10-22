import React from "react";

// icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// styles
import * as S from './styles/MinutesList.style';

const MinutesList = ({
  minutesList,
  handleDetailMinutes,
}) => {

  return (
    <S.MinutesWrap>
      {minutesList.map((minute) => (
        <S.MinutesItem key={minute.id}>
          <S.MinutesContacts >
            <S.MinutesInfoBox>
              <S.MinutesDate>{minute.date}</S.MinutesDate>
              <S.MinutesTitle>{minute.title}</S.MinutesTitle>
            </S.MinutesInfoBox>
            <S.MinutesContactsRight>
              <S.MinutesButton onClick={() => handleDetailMinutes(minute)}>
                <BsFillArrowRightCircleFill size='25px' />
              </S.MinutesButton>
            </S.MinutesContactsRight>
          </S.MinutesContacts>
        </S.MinutesItem>
      ))}
    </S.MinutesWrap>
  );
};

export default MinutesList;
