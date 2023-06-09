import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const AddText = styled.div`
  width: 30%;
  color: #8165df;
`;
const AddInput = styled.input`
  width: 50%;
  font-size: 14px;
  border: none;
`;
const AddTextArea = styled.textarea`
  width: 50%;
  height: 60px;
  font-size: 14px;
  border: none;
`;
const AddPayButton = styled.input`
  color: #8165df;
  accent-color: #8165df;
`;
const AddPayLabel = styled.label`
  color: #8165df;
  margin: 10px;
`;

const SubmitButton = styled.button`
  color: #ffffff;
  width: 100px;
  background-color: #8165df;
  height: 30px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 100px;
`;
const ReservationAdd = () => {
  const [placeName, setPlaceName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [decrition, setDecrition] = useState("");
  const [telNum, setTelNum] = useState("");
  const [image, setImage] = useState("");
  const [pay, setPay] = useState(""); //true 가 무료, false 가 유료

  const handleOnPlacName = (e) => {
    e.preventDefault();
    setPlaceName(e.target.value);
  };
  const handleOnAreaName = (e) => {
    e.preventDefault();
    setAreaName(e.target.value);
  };
  const handleOnDetailAddress = (e) => {
    e.preventDefault();
    setDetailAddress(e.target.value);
  };
  const handleOnDecrition = (e) => {
    e.preventDefault();
    setDecrition(e.target.value);
  };
  const handleOnTelNum = (e) => {
    e.preventDefault();
    setTelNum(e.target.value);
  };
  const handleOnImage = (e) => {
    e.preventDefault();
    setImage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setData();
  };
  const setData = async () => {
    const formData = new FormData();

    const url = `https://${process.env.REACT_APP_SERVER_URI}/reservation/set-office`;
    const data = {
      image: image,
      telNum: telNum,
      pay: pay,
      placeName: placeName,
      decrition: decrition,
      areaName: areaName,
      detailAddress: detailAddress,
    };

    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

    try {
      formData.append("data", blob); // 또는  formData.append("data", JSON.stringify(value)); // JSON 형식으로 파싱.(백엔드의 요청에 따라 전송방식이 달라진다.)
      await axios({
        method: "POST",
        url: `https://${process.env.REACT_APP_SERVER_URI}/reservation/set-office`,
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
        },
        data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form>
        <AddDiv>
          <AddText>회의실 이름 : </AddText>
          <AddInput onChange={handleOnPlacName} />
        </AddDiv>
        <AddDiv>
          <AddText>자치구 : </AddText>
          <select name="place" id="place" onChange={handleOnAreaName}>
            <option value="용산구">용산구</option>
            <option value="서초구">서초구</option>
            <option value="광진구">광진구</option>
            <option value="송파구">송파구</option>
            <option value="중구">중구</option>
            <option value="동대문구">동대문구</option>
            <option value="종로구">종로구</option>
            <option value="강북구">강북구</option>
            <option value="양천구">양천구</option>
            <option value="동작구">동작구</option>
            <option value="구로구">구로구</option>
            <option value="노원구">노원구</option>
            <option value="중랑구">중랑구</option>
            <option value="영등포구">영등포구</option>
          </select>
        </AddDiv>
        <AddDiv>
          <AddText>회의실 상세주소 : </AddText>
          <AddInput onChange={handleOnDetailAddress} />
        </AddDiv>
        <AddDiv>
          <AddText>회의실 전화번호 : </AddText>
          <AddInput type="tel" onChange={handleOnTelNum} />
        </AddDiv>
        <AddDiv>
          <AddText>회의실 이미지 : </AddText>
          <AddInput type="file" onChange={handleOnImage} />
        </AddDiv>
        <AddDiv>
          <AddText></AddText>
          <AddPayButton
            id="payFree"
            type="radio"
            onClick={() => {
              setPay("무료");
            }}
            name="pay"
          />

          <AddPayLabel for="payFree">무료</AddPayLabel>
          <AddPayButton
            id="payCharged"
            type="radio"
            onClick={() => {
              setPay("유료");
            }}
            name="pay"
          />
          <AddPayLabel for="payCharged">유료</AddPayLabel>
        </AddDiv>
        <AddDiv>
          <AddText>회의실 부가설명 : </AddText>
          <AddTextArea onChange={handleOnDecrition} />
        </AddDiv>
        <AddDiv>
          <SubmitButton type="submit" onClick={handleOnSubmit}>
            회의실 등록하기
          </SubmitButton>
        </AddDiv>
      </form>
    </>
  );
};

export default ReservationAdd;
