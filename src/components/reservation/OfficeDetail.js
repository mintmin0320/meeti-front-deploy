import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import Map from '../../common/Map';

import "react-datepicker/dist/react-datepicker.css"

import {
  FaPhoneVolume,
  BsFillExclamationTriangleFill,
  BiTimeFive,
  FaWonSign
} from "../../common/icons/index";

import * as S from './styles/OfficeDetail.style';

const ReservationDetail = ({
  office,
  handleSubmit,
  date,
  setDate,
  handleChange,
  ExampleCustomInput,
  handlePayment
}) => {
  const [isPayment, setIsPayment] = useState(false);

  return (
    <S.DetailWrap>
      <S.ReservationForm onSubmit={handleSubmit}>
        <S.Text>예약일자 </S.Text>
        <DatePicker
          name='date'
          locale={ko}
          selected={date}
          onChange={(dateData) => {
            setDate(dateData);
          }}
          customInput={<ExampleCustomInput />}
        />
        <S.Time
          type="time"
          name='startTime'
          onChange={handleChange}
          required
        />
        <S.Time
          type="time"
          name='endTime'
          onChange={handleChange}
          required
        />
        <S.ReservationBox>
          <S.CautionBox>
            <S.CautionTitle>예약시 주의사항</S.CautionTitle>
            <S.CautionText>
              박수, 연호, 환호, 고성 및 언쟁 등이 발생하는 회의는 예약을
              자제부탁드립니다.
            </S.CautionText>
            <S.CautionText>
              여러 회의들이 진행되는 장소입니다. 다음 이용자, 다른 회의에
              방해가 되지 않도록 배려와 양해부탁드립니다
            </S.CautionText>
            <S.CautionText>
              이용 수칙이 지켜지지 않는 경우, 재예약이 어려울 수 있습니다.
            </S.CautionText>
            <S.CautionText>
              주의사항을 숙지하지 않고 있는 불이익은 본인 부담으로 처리될 수
              있습니다.
            </S.CautionText>
          </S.CautionBox>
          <S.SubmitButton
            type='button'
            disabled={isPayment}
            style={{ background: "#F7E600", color: "#000" }}
            onClick={() => {
              handlePayment();
              setIsPayment(true);
            }}
            aria-label='kakaopay_payment'
          >
            {!isPayment ? '카카오페이 결제' : '결제완료'}
          </S.SubmitButton>
          <S.SubmitButton disabled={!office.status} aria-label='reservation_office'>
            {office.status ? '예약하기' : '예약불가'}
          </S.SubmitButton>
        </S.ReservationBox>
      </S.ReservationForm>
      <S.InfoSection>
        <S.TopInfoBox>
          <S.OfficeImg
            src={office.image}
            alt='office image'
          />
          <Map placeName={office.placeName} />
        </S.TopInfoBox>
        <S.PlaceName>{office.placeName}</S.PlaceName>
        <S.Info>{office.addressDetail}</S.Info>
        <S.InfoWrap>
          <FaPhoneVolume className="SubDivIcons" />
          <S.Info>{office.telNum}</S.Info>
        </S.InfoWrap>
        <S.InfoWrap>
          <FaWonSign className="SubDivIcons" />
          <S.Info>{office.pay}</S.Info>
        </S.InfoWrap>
        <S.InfoWrap>
          <BiTimeFive className="SubDivIcons" />
          <S.Info>10:00 ~ 17:00</S.Info>
        </S.InfoWrap>
        <S.InfoWrap>
          <BsFillExclamationTriangleFill className="SubDivIcons" />
          <S.Info>{office.description}</S.Info>
        </S.InfoWrap>
      </S.InfoSection>
    </S.DetailWrap>
  );
};

export default ReservationDetail;