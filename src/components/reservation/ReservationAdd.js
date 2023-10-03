import React, { useState } from "react";
import styled from "styled-components";

// apis
import { fetchAddOffice } from '../../api/reservation';

// styles
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
  const userId = localStorage.getItem('userId');
  const formData = new FormData();
  const [officeForm, setOfficeForm] = useState({
    placeName: "",
    pay: "",
    detailAddress: "",
    address: "용산구",
    description: "",
    file: "",
    telNum: "",
  });

  const handleOnAreaName = (e) => {
    e.preventDefault();

    setOfficeForm({
      ...officeForm,
      address: e.target.value
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setOfficeForm({
      ...officeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleImgUpload = async (e) => {
    if (!e.target.files) {
      return;
    }

    setOfficeForm({
      ...officeForm,
      file: e.target.files[0],
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    formData.append("placeName", officeForm.placeName);
    formData.append("pay", officeForm.pay);
    formData.append("description", officeForm.description);
    formData.append("address", officeForm.address);
    formData.append("detailAddress", officeForm.detailAddress);
    formData.append("image", officeForm.file);
    formData.append("telNum", officeForm.telNum);

    //Key 확인하기
    for (let key of formData.keys()) {
      console.log("key : " + key);
    }

    /* value 확인하기 */
    for (let value of formData.values()) {
      console.log("value : " + value);
    }
    try {
      const res = await fetchAddOffice(userId, formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <AddDiv>
        <AddText>회의실 이름 : </AddText>
        <AddInput onChange={handleInputChange} name="placeName" />
      </AddDiv>
      <AddDiv>
        <AddText>자치구 : </AddText>
        <select name="address" id="address" onChange={handleOnAreaName}>
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
        <AddInput onChange={handleInputChange} name="detailAddress" />
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
        <AddText>회의실 예약 비용 : </AddText>
        <AddInput onChange={handleInputChange} name="pay" />
      </AddDiv>
      <AddDiv>
        <AddText>회의실 부가설명 : </AddText>
        <AddTextArea onChange={handleInputChange} name="description" />
      </AddDiv>
      <AddDiv>
        <SubmitButton>회의실 등록하기</SubmitButton>
      </AddDiv>
    </form>
  );
};

export default ReservationAdd;