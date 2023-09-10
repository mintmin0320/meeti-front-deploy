import React, { Fragment, useEffect, useState, forwardRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"
import Map from "../Map";

// apis
import { fetchDetailOfficeData, fetchReservationOffice } from '../../api/reservation';

// icons
import { BsTelephone, BsFillExclamationTriangleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { ko } from "date-fns/esm/locale";

// styles
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftDiv = styled.form`
  width: 30%;
`;

const RightDiv = styled.div`
  width: 70%;
  position: relative;
`;

const ImgDiv = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;

const TitleDiv = styled.div`
  font-size: 20px;
  margin: 10px;
`;

const ContentsDiv = styled.div`
  font-size: 12px;
  color: #535571;
  margin: 10px;
`;

const SubDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Text = styled.div`
  color: #8165df;
  font-size: 15px;
  margin-top: 5px;
  ${css`
    &:after {
      content: "  >";
    }
  `}
`;

const TimeDiv = styled.div`
  display: flex;
`;

const TimeButton = styled.div`
  background: ${backColor => (backColor.timeTrue ? "#6f5cea" : "#ffffff")};
  border: 1px solid #6f5cea;
  border-radius: 5px;
  padding: 5px;
  color: ${backColor => (backColor.timeTrue ? "#ffffff" : "#6f5cea")};
  cursor: pointer;
  margin: 10px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${css`
    &:hover {
      background-color: #8165df;
      color: #ffffff;
    }
  `}
`;

const CautionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Caution = styled.div`
  background: #ffffff;
  border: 0.5px solid #9c9c9c;
  width: 100%;
  height: 20%;
  margin-left: 30px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CautionTitle = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 10px;
`;

const CautionText = styled.div`
  font-size: 12px;
  color: #535571;
  text-align: center;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  width: 90%;
  color: #ffffff;
  background: #6f5cea;
  border-radius: 2px;
  margin-top: 20px;
  margin: 10px;
  padding: 6px;
  text-align: center;
  margin-left: 30px;
  cursor: pointer;
`;

const MapContainer = styled.div`
  position: absolute;
  bottom: -100px;
  right: 20px;
`;

const Time = styled.input`
  width: 35%;
  margin: 10px;
`;

const ReservationDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const officeId = location.state.officeId;
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [office, setOffice] = useState({
    image: "",
    addressDetail: "",
    telNum: "",
    placeName: "",
    status: "",
    description: "",
  });

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </div>
  ));

  useEffect(() => {
    getOfficeData();
  }, []);

  const getOfficeData = async () => {
    try {
      const res = await fetchDetailOfficeData(officeId);
      setOffice({
        ...office,
        image: res.image,
        addressDetail: res.addressDetail,
        telNum: res.telNum,
        placeName: res.placeName,
        status: res.status,
        description: res.description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!office.status) {
      alert("아쉽지만 다음에 예약해 주세요!");

      return;
    }

    try {
      const data = {
        officeId,
        date: startDate,
        startTime,
        endTime,
      };
      await fetchReservationOffice(data);

      alert("예약 완료!");
      navigate("/reservation");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainDiv>
        <LeftDiv onSubmit={(e) => handleOnSubmit(e)}>
          <Text>예약일자 </Text>
          <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              console.log(date);
            }}
            // dateFormat="yyyy-MM-dd"
            customInput={<ExampleCustomInput />}
          />
          <Time
            type="time"
            value={startTime}
            onChange={(e) => { setStartTime(e.target.value) }}
            required
          />
          <Time
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <CautionDiv>
            <Caution>
              <CautionTitle>예약시 주의사항</CautionTitle>
              <CautionText>
                박수, 연호, 환호, 고성 및 언쟁 등이 발생하는 회의는 예약을
                자제부탁드립니다.
              </CautionText>
              <CautionText>
                여러 회의들이 진행되는 장소입니다. 다음 이용자, 다른 회의에
                방해가 되지 않도록 배려와 양해부탁드립니다
              </CautionText>
              <CautionText>
                이용 수칙이 지켜지지 않는 경우, 재예약이 어려울 수 있습니다.
              </CautionText>
              <CautionText>
                주의사항을 숙지하지 않고 있는 불이익은 본인 부담으로 처리될 수
                있습니다.
              </CautionText>
            </Caution>
            {/* <SubmitButton onClick={handleOnClick}>예약하기</SubmitButton> */}
            <SubmitButton>예약하기</SubmitButton>
          </CautionDiv>
        </LeftDiv>
        <RightDiv>
          <ImgDiv src={office.image}></ImgDiv>
          <TitleDiv>{office.placeName}</TitleDiv>
          <ContentsDiv>{office.addressDetail}</ContentsDiv>
          <SubDiv>
            <BsTelephone className="SubDivIcons" />
            <ContentsDiv>{office.telNum}</ContentsDiv>
          </SubDiv>
          <SubDiv>
            <BiTimeFive className="SubDivIcons" />
            <ContentsDiv>10:00 ~ 17:00</ContentsDiv>
          </SubDiv>
          <SubDiv>
            <BsFillExclamationTriangleFill className="SubDivIcons" />
            <ContentsDiv>{office.description}</ContentsDiv>
          </SubDiv>
          <MapContainer>
            {/* <Map /> */}
          </MapContainer>
        </RightDiv>
      </MainDiv>
    </>
  );
};

export default ReservationDetail;