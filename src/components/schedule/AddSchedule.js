import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko"; // 날짜 포맷 라이브러리 (한국어 기능을 임포트)

import BackgroundPalette from './BackgroundPalette';

// apis
import { fetchAddSchedule } from '../../api/schedule';

// hooks
import { useColor } from '../../hooks/context/ColorContext';

// icons
import { BiMinus, BiPlus } from "react-icons/bi";

// CSS
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// styles
const AddTitle = styled.input`
  font-size: 24px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f8f8f8;
  width: 80%;
`;

const TitleFont = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #535571;
  padding: 10px;
  ${css`
    &:after {
      content: "  >";
    }
  `}
`;

const AddOther = styled.form`
  display: flex;
`;

const Left = styled.div`
  width: 60%;
`;

const Right = styled.div`
  width: 45%;
  height: 520px;

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

const TimeDiv = styled.div`
  display: flex;
  width: 100%;
`;

const Time = styled.input`
  width: 40%;
  margin: 10px;
`;

const PlaceInput = styled.input`
  width: 90%;
  height: 25px;
  background: #ffffff;
  border: 0.5px solid #535571;
  border-radius: 5px;
  margin: 10px;
`;

const SubmitButton = styled.button`
  width: 111px;
  height: 33px;
  background: #8165df;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-top: 20px;
`;

const KaKaoMapBox = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1500px) {
    height: 320px;
  }
`;

const SummitButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const AddSchedule = () => {
  const userId = localStorage.getItem('userId');
  const { kakao } = window;
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const { color } = useColor();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [title, setTitle] = useState("");
  const [initTime, setStartTime] = useState("");
  const [finishTime, setEndTime] = useState("");
  const [place, setPlace] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();

    setTitle(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      color,
      start: date[0].startDate,
      end: date[0].endDate,
      initTime,
      finishTime,
      place,
    };

    try {
      const res = await fetchAddSchedule(userId, data);

      if (res.data) {
        alert('일정 등록 성공!');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setScheduleDate = (item) => {
    setDate([item.selection]);
  };

  useEffect(() => {
    if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
      console.log("Kakao Maps SDK 로드 완료");
    } else {
      console.log("Kakao Maps SDK 로드 중");
    }
  }, []);


  const searchPlace = () => {
    if (!window.kakao.maps.services) {
      alert("kakao.maps.services 객체가 없습니다.");
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();
    const places = new kakao.maps.services.Places();

    try {
      places.keywordSearch(place, function (result, status) {
        console.log('keywordSearch 결과 상태:', status);
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          if (marker) {
            marker.setMap(null);
          }
          const newMarker = new kakao.maps.Marker({
            map: map,
            position: coords
          });
          setMarker(newMarker);

          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${result[0].place_name}</div>`
          });
          infowindow.open(map, newMarker);
          map.setCenter(coords);

          // 도로명 주소 추출하기
          geocoder.coord2Address(coords.getLng(), coords.getLat(), function (addrResult, addrStatus) {
            if (addrStatus === kakao.maps.services.Status.OK) {
              setPlace(addrResult[0].road_address.address_name);
            }
          });
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다. 키워드를 다시 확인해주세요.');
        } else {
          alert('키워드 검색 중 오류가 발생했습니다.');
        }
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (!window.kakao) return;

    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(37.50057852126737, 126.86813651454828), level: 3 };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  return (
    <AddOther onSubmit={handleOnSubmit}>
      <Left>
        <AddTitle
          onChange={(e) => handleOnChange(e)}
          placeholder="일정 제목"
          required={true}
        />
        <TitleFont>날짜</TitleFont>
        <DateRange
          locale={ko}
          editableDateInputs={true}
          onChange={(item) => setScheduleDate(item)}
          moveRangeOnFirstSelection={false}
          ranges={date}
          retainEndDateOnFirstSelection={true}
        />
      </Left>
      <Right>
        <BackgroundPalette />
        <TitleFont>시간</TitleFont>
        <TimeDiv>
          <Time type="time" value={initTime} onChange={(e) => { setStartTime(e.target.value) }} />
          <BiMinus className="BiMinus" />
          <Time type="time" value={finishTime} onChange={(e) => setEndTime(e.target.value)} />
        </TimeDiv>
        <TitleFont>장소</TitleFont>
        <PlaceInput value={place} onChange={e => setPlace(e.target.value)} />
        <button onClick={searchPlace} type='button'>장소 검색</button>
        <KaKaoMapBox>
          <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </KaKaoMapBox>
        <SummitButtonDiv>
          <SubmitButton
            type="submit"
          >
            <BiPlus
              style={{ color: "#ffffff", marginRight: "5px" }}
            />
            일정 추가
          </SubmitButton>
        </SummitButtonDiv>
      </Right>
    </AddOther>
  );
};

export default AddSchedule;