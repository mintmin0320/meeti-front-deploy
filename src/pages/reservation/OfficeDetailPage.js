import React, { useEffect, useState, useCallback, forwardRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import OfficeDetail from "../../components/reservation/OfficeDetail";
import Header from '../../common/Header';

import color from "./../../assets/color.png";

// styles
import {
  Container,
  BackColor,
  MainSection,
} from '../../styles/CommonStyles';
import { fetchDetailOfficeData, fetchReservationOffice, fetchReservationPayment } from '../../api/reservation';

const DetailSection = styled.section`
  width: 90%;
  height: 100%;
  z-index: 3;
`;

const OfficeDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const officeId = location.state.officeId;
  const userId = localStorage.getItem('userId');
  const [office, setOffice] = useState({
    placeName: '',
    pay: '',
    description: '',
    address: '',
    addressDetail: '',
    telNum: '',
    image: '',
    status: null,
  });
  const [reservation, setReservation] = useState({
    startTime: '',
    endTime: '',
  });
  const [date, setDate] = useState(new Date());
  const [isPayment, setIsPayment] = useState(false);

  useEffect(() => {
    getDetailOfficeData();
  }, []);

  // 오피스 상세 데이터
  const getDetailOfficeData = async () => {
    try {
      const res = await fetchDetailOfficeData(officeId);
      setOffice({
        ...office,
        placeName: res.data.placeName,
        pay: res.data.pay,
        description: res.data.description,
        address: res.data.address,
        addressDetail: res.data.addressDetail,
        telNum: res.data.telNum,
        image: res.data.image,
        status: res.data.status,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setReservation((prevState) => ({
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
    const data = {
      item_name: office.placeName,
      item_code: officeId,
      total_amount: office.pay
    };

    try {
      const res = await fetchReservationPayment(data);

      if (res && res.data && res.data.next_redirect_pc_url) {
        setIsPayment(true);
        window.open(res.data.next_redirect_pc_url, '_blank');
      } else {
        alert('결제 정보를 받아오지 못했습니다.');
      }

    } catch (error) {
      alert('결제 과정 중 문제가 발생했습니다.');
      console.log(error);
    }
  };

  // 예약
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPayment) {
      return;
    }

    const data = {
      officeId,
      date: date,
      startTime: reservation.startTime,
      endTime: reservation.endTime,
    };

    try {
      await fetchReservationOffice(userId, data);

      alert("예약 완료!");
      navigate("/reservation");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <MainSection>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <DetailSection>
          <OfficeDetail
            office={office}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            date={date}
            setDate={setDate}
            ExampleCustomInput={ExampleCustomInput}
            handlePayment={handlePayment}
          />
        </DetailSection>
      </MainSection>
    </Container>
  );
};

export default OfficeDetailPage;
