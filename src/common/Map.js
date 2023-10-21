import React, { useState, useEffect } from "react";
import styled from 'styled-components';

// styles
const MapBox = styled.div`
  width: 49.5%;
  height: 100%;
  object-fit: cover;
`;

const Map = ({ placeName }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  const { kakao } = window;

  const searchPlace = (keyword) => {
    const places = new kakao.maps.services.Places();
    const geocoder = new kakao.maps.services.Geocoder();

    places.keywordSearch(keyword, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        if (marker) {
          marker.setMap(null);
        }
        const newMarker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        setMarker(newMarker);

        // 도로명 주소 추출
        geocoder.coord2Address(
          coords.getLng(),
          coords.getLat(),
          function (addrResult, addrStatus) {
            if (addrStatus === kakao.maps.services.Status.OK) {
              var roadAddress = addrResult[0].road_address.address_name;

              var infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${roadAddress}</div>`,
              });
              infowindow.open(map, newMarker);
            }
          }
        );
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다. 주소를 다시 확인해주세요.");
      } else {
        alert("키워드 검색 중 오류가 발생했습니다.");
      }
    });
  };

  useEffect(() => {
    if (!window.kakao) return;

    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.50057852126737, 126.86813651454828),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    searchPlace(placeName);
  }, [placeName]);

  return (
    <MapBox id="map" style={{ width: "100%", height: "100%" }}></MapBox>
  );
};

export default Map;
