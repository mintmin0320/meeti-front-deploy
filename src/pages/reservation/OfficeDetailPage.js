import { useState, useCallback, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';

import OfficeDetail from "../../components/reservation/OfficeDetail";
import Header from '../../common/Header';

import color from "./../../assets/color.png";

import {
  Container,
  BackColor,
  MainSection,
} from '../../styles/CommonStyles';
import * as S from './styles/OfficeDetailPage.style';

import {
  fetchOfficeDetail,
  usePayment,
  useReservation
} from '../../query-hooks/useReservation';

const OfficeDetailPage = () => {
  const userId = localStorage.getItem('userId');

  const location = useLocation();
  const officeId = location.state.officeId;

  const [reservationDate, setReservationDate] = useState({
    startTime: '',
    endTime: '',
  });
  const [date, setDate] = useState(new Date());
  const [isPayment, setIsPayment] = useState(false);

  const { data: office } = useQuery(fetchOfficeDetail(officeId));
  const { reservation } = useReservation();
  const { payment } = usePayment();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setReservationDate((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </div>
  ));

  // 카카오페이 결제
  const handlePayment = async () => {
    const prams = {
      item_name: office.placeName,
      item_code: officeId,
      total_amount: office.pay
    };

    await payment(prams);

    setIsPayment(true);
  };

  // 예약
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPayment) {
      return;
    }

    const params = {
      officeId,
      date: date,
      startTime: reservationDate.startTime,
      endTime: reservationDate.endTime,
    };

    await reservation({ userId, params });
  };

  return (
    <Container>
      <MainSection>
        <BackColor
          src={color}
          alt='background image'
          style={{ opacity: 0.2 }}
        />
        <Header />
        <S.DetailSection>
          <OfficeDetail
            office={office}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            date={date}
            setDate={setDate}
            ExampleCustomInput={ExampleCustomInput}
            handlePayment={handlePayment}
          />
        </S.DetailSection>
      </MainSection>
    </Container>
  );
};

export default OfficeDetailPage;
