import { FaArrowCircleRight } from "../../common/icons/index";

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
                <FaArrowCircleRight size='25px' />
              </S.MinutesButton>
            </S.MinutesContactsRight>
          </S.MinutesContacts>
        </S.MinutesItem>
      ))}
    </S.MinutesWrap>
  );
};

export default MinutesList;
