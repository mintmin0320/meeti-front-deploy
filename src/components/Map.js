/*global kakao*/
import React, { useEffect } from "react";
import roomlist from "../reservation copy.json";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(roomlist[0].y, roomlist[0].x),
      level: 3,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(roomlist[0].y, roomlist[0].x);

    //마커 생성
    let marker = new kakao.maps.Marker({ position: markerPosition });

    //마커 표시
    marker.setMap(map);
    console.log(roomlist[0].x);
  };

  return (
    <div>
      <div id="map" style={{ width: "700px", height: "500px" }}></div>
    </div>
  );
}
