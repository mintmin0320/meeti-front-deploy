import React from 'react';

// icons
import { BiPhoneCall } from "react-icons/bi";

// styles
import * as S from './styles/ReservationList.style';
import { OfficeListWrap } from '../../styles/CommonStyles';

const officeList = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    date: "2023-10-15",
    startTime: "09:00",
    endTime: "18:00",
    officeName: "서울 사무실",
    telNum: "02-1234-5678"
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    date: "2023-10-16",
    startTime: "09:30",
    endTime: "17:30",
    officeName: "부산 사무실",
    telNum: "051-9876-5432"
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    date: "2023-10-17",
    startTime: "10:00",
    endTime: "19:00",
    officeName: "대구 사무실",
    telNum: "053-4567-8910"
  }
];

const ReservationList = ({
  reservationList
}) => {
  return (
    <OfficeListWrap>
      {officeList.map((item) => {
        return (
          <S.OfficeItem key={item.id}>
            <S.OfficeImgBox>
              <S.OfficeImg src={item.image} alt="office" />
            </S.OfficeImgBox>
            <S.OfficeInfoBox>
              <S.ReservationDate>{item.date}</S.ReservationDate>
              <S.ReservationTime>
                {item.startTime} : {item.endTime}
              </S.ReservationTime>
              <S.ReservationPlace>{item.officeName}</S.ReservationPlace>
              <S.ReservationTel>
                <BiPhoneCall style={{ color: "#8165df" }} />
                <S.SubOptionTelNum>{item.telNum}</S.SubOptionTelNum>
              </S.ReservationTel>
            </S.OfficeInfoBox>
          </S.OfficeItem>
        )
      })}
    </OfficeListWrap>
  )
};

export default ReservationList;