import React, { useState, useEffect } from "react";
import styled from 'styled-components';

// styles
const MapBox = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Map = ({ placeName }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  const { kakao } = window;

  const searchPlace = (keyword) => {
    if (!map) {
      console.error("Map is not initialized yet.");
      return; // Map 객체가 초기화되지 않았다면 여기서 함수를 종료
    }

    const places = new kakao.maps.services.Places();
    const geocoder = new kakao.maps.services.Geocoder();

    places.keywordSearch(keyword, function (result) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 이 부분을 추가하여 지도의 중심을 마커의 좌표로 설정
      map.setCenter(coords);

      if (marker) {
        marker.setMap(null);
      }
      if (infoWindow) {
        infoWindow.close();
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

            var newInfoWindow = new kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${roadAddress}</div>`,
            });
            newInfoWindow.open(map, newMarker);
            setInfoWindow(newInfoWindow);
          }
        }
      );
    });
  };

  useEffect(() => {
    if (!window.kakao || map) return;

    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.50057852126737, 126.86813651454828),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  useEffect(() => {
    if (!map) return;
    searchPlace(placeName);
  }, [map, placeName]);

  return <MapBox id="map"></MapBox>;
};

export default Map;
