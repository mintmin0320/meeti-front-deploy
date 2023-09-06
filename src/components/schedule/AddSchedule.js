/*
  일정 날자 선택할 경우 setScheduleDate 코드 수정 필요
*/

import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko"; // 날짜 포맷 라이브러리 (한국어 기능을 임포트)

import BackgroundPalette from './BackgroundPalette';
import { fetchAddSchedule } from '../../api/schedule';

// hooks
import { useColor } from '../../hooks/context/colorContext';

// icons, library-CSS
import { BiMinus, BiPlus } from "react-icons/bi";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from 'react-router-dom';

// CSS
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
  /* background: #8165df; */
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
  const navigate = useNavigate();
  const { kakao } = window;
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const { color } = useColor();
  const [isSdkLoaded, setSdkLoaded] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
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
      startDate: state[0].startDate,
      endDate: state[0].endDate,
      startTime,
      endTime,
      place,
    };

    try {
      const res = await fetchAddSchedule(data);

      // window.location.reload();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // 리팩토링 필요
  const setScheduleDate = (item) => {
    setState([item.selection]);

    console.log(item)

    if (item.selection.endDate !== null) {
    }
  };

  useEffect(() => {
    if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
      console.log("Kakao Maps SDK 로드 완료");
    } else {
      console.log("Kakao Maps SDK 로드 중");
    }
  }, []);


  const searchPlace = () => {
    console.log("searchPlace 함수 호출됨");

    if (!window.kakao.maps.services) {
      console.log("kakao.maps.services 객체가 없습니다.");
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
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${result[0].place_name}</div>`  // 변경된 부분
          });
          infowindow.open(map, newMarker);
          map.setCenter(coords);

          // 도로명 주소 추출하기
          geocoder.coord2Address(coords.getLng(), coords.getLat(), function (addrResult, addrStatus) {
            if (addrStatus === kakao.maps.services.Status.OK) {
              setPlace(addrResult[0].road_address.address_name);  // Set 도로명 주소 to PlaceInput
            }
          });
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다. 키워드를 다시 확인해주세요.');  // 변경된 부분
        } else {
          alert('키워드 검색 중 오류가 발생했습니다.');  // 변경된 부분
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
          onChange={(item) => { setScheduleDate(item); let a = item.selection.startDate; console.log(a) }}
          moveRangeOnFirstSelection={false}
          ranges={state}
          retainEndDateOnFirstSelection={true}
        />
      </Left>
      <Right>
        <BackgroundPalette />
        <TitleFont>시간</TitleFont>
        <TimeDiv>
          <Time type="time" value={startTime} onChange={(e) => { setStartTime(e.target.value) }} />
          <BiMinus className="BiMinus" />
          <Time type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
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
            onClick={() => console.log(state, title)}
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
