import React from 'react';

// icons
import { BiPhoneCall } from "react-icons/bi";

// styles
import * as S from './styles/ReservationList.style';
import { ListWrap } from '../../styles/CommonStyles';

const ReservationList = ({
  reservationList
}) => {
  return (
    <ListWrap>
      {reservationList.map((item) => {
        return (
          <S.OfficeItem key={item?.id}>
            <S.OfficeImgBox>
              <S.OfficeImg src={item?.image} alt="office" />
            </S.OfficeImgBox>
            <S.OfficeInfoBox>
              <S.ReservationDate>{item?.date}</S.ReservationDate>
              <S.ReservationTime>
                {item?.startTime} : {item?.endTime}
              </S.ReservationTime>
              <S.ReservationPlace>{item?.officeName}</S.ReservationPlace>
              <S.ReservationTel>
                <BiPhoneCall style={{ color: "#8165df" }} />
                <S.SubOptionTelNum>{item?.telNum}</S.SubOptionTelNum>
              </S.ReservationTel>
            </S.OfficeInfoBox>
          </S.OfficeItem>
        )
      })}
    </ListWrap>
  )
};

export default ReservationList;