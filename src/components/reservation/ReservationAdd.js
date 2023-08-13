import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ReservationAdd = () => {
  const formData = new FormData(); // 폼데이터 사용을 위해 선언 왜 여기다 쓰냐 함수 두 곳에 쓸 건데 한 함수 안에서 선언하면 다른 함수에서 사용 못 하니까 이 컴포넌트 안에서 모두 사용하도록 여기다 선언

  const [areaName, setAreaName] = useState("용산구"); // 용산구를 기본값으로 한 이유는 셀렉트 아무것도 안 고르면 값 안 변함 그래서 기본 선택 용산구를 기본값으로 놓으면 해결됨
  const [state, setState] = useState({
    // state를 오브젝트 안에 넣어서 쓰면 가독성 좋게 작성 가능 단 원래 console.log(pay)이렇게 쓰던 걸 console.log(state.pay)일케 써야됨 why? 오브젝트니까
    placeName: "",
    detailAdress: "",
    decrition: "",
    telNum: "",
    pay: "",
    file: "",
  });

  // 이건 아래 지역 셀렉트 코드 이해를 못하겠어서 걍 남겨두겠음
  const handleOnAreaName = (e) => {
    e.preventDefault();
    setAreaName(e.target.value);
  };

  // 아래 거 처럼 사용하면 간단하게 작성가능 단 state를 객체형식으로 사용할때만 + input에 name 속성 적어줘야함 state와 동일하게
  const handleInputChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // 파일 선택에서 이미지 고르면 state.file로 이미지 데이터 저장
  const handleImgUpload = async (e) => {
    if (!e.target.files) {
      return;
    }
    setState({
      ...state,
      file: e.target.files[0],
    });
    console.log(state.file);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    formData.append("image", state.file); // 이미지 파일이 formData에 image라는 키 값에 저장됨
    formData.append("telNum", state.telNum); // formdata 형식으로 달라는 말은 formdata안에 값을 담아서 보내달라는 뜻 여기다가 키 값으로 서버에서 원하는 변수명을 적고 두 번째 인자에 값(value)을 넣는다.
    formData.append("pay", state.pay); // input으로 받은 각각의 값을 키 변수명에 맞게 추가
    formData.append("placeName", state.placeName);
    formData.append("decrition", state.decrition);
    formData.append("areaName", areaName);
    formData.append("detailAdress", state.detailAdress);

    //Key 확인하기
    for (let key of formData.keys()) {
      console.log("key : " + key);
    }

    /* value 확인하기 */
    for (let value of formData.values()) {
      console.log("value : " + value);
    }
    try {
      const url = `https://${process.env.REACT_APP_SECRET_URL}/reservation/set-office`;
      const res = await axios.post(url, formData);
      console.log(res);
      if (res.data.result) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // submit 이벤트는 form에 onSubmit으로 주는 게 맞음 form 안에 버튼은 자동으로 기본타입이 submit이 됨 -> 버튼에 이벤트 안 줘도 form에 이벤트를 주면 버튼은 타입이 submit이라 이벤트 발생
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <AddDiv>
        <AddText>회의실 이름 : </AddText>
        <AddInput onChange={handleInputChange} name="placeName" />
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
        <AddInput onChange={handleInputChange} name="detailAdress" />
      </AddDiv>
      <AddDiv>
        <AddText>회의실 전화번호 : </AddText>
        <AddInput type="tel" onChange={handleInputChange} name="telNum" />
      </AddDiv>
      <AddDiv>
        <AddText>회의실 이미지 : </AddText>
        <AddInput type="file" onChange={(e) => handleImgUpload(e)} />
      </AddDiv>
      <AddDiv>
        <AddText></AddText>
        <AddPayButton
          id="payFree"
          type="radio"
          onClick={() => {
            setState({
              ...state,
              pay: "무료",
            });
          }}
          name="pay"
        />

        <AddPayLabel for="payFree">무료</AddPayLabel>
        <AddPayButton
          id="payCharged"
          type="radio"
          onClick={() => {
            setState({
              ...state,
              pay: "유료",
            });
          }}
          name="pay"
        />
        <AddPayLabel for="payCharged">유료</AddPayLabel>
      </AddDiv>
      <AddDiv>
        <AddText>회의실 부가설명 : </AddText>
        <AddTextArea onChange={handleInputChange} name="decrition" />
      </AddDiv>
      <AddDiv>
        <SubmitButton>회의실 등록하기</SubmitButton>
      </AddDiv>
    </form>
  );
};

export default ReservationAdd;

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