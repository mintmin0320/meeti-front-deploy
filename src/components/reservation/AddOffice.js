import React from "react";
import styled from "styled-components";

// styles
const AddForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputFieldBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;

const InputText = styled.p`
  width: 30%;
  height: 100%;
  color: #8165df;
`;

const Input = styled.input`
  width: 50%;
  height: 30px;
  font-size: 14px;
  border: none;
`;

const Select = styled.select`
  width: 50%;
  height: 30px;
  font-size: 14px;
  border: none;
`;

const TextArea = styled.textarea`
  width: 50%;
  height: 60px;
  font-size: 14px;
  border: none;
  outline: none;
`;

const SubmitButton = styled.button`
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #8165df;
  margin-top: 30px;
  cursor: pointer;
`;

const AddOffice = ({
  handleSubmit,
  handleChange,
  handleImgUpload
}) => {
  return (
    <AddForm onSubmit={handleSubmit}>
      <InputFieldBox>
        <InputText>회의실 이름 : </InputText>
        <Input onChange={handleChange} name="placeName" required />
      </InputFieldBox>
      <InputFieldBox>
        <InputText>자치구 : </InputText>
        <Select name="address" id="address" onChange={handleChange} required>
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
        </Select>
      </InputFieldBox>
      <InputFieldBox>
        <InputText>회의실 상세주소 : </InputText>
        <Input onChange={handleChange} name="detailAddress" required />
      </InputFieldBox>
      <InputFieldBox>
        <InputText>회의실 전화번호 : </InputText>
        <Input type="tel" onChange={handleChange} name="telNum" required />
      </InputFieldBox>
      <InputFieldBox>
        <InputText>회의실 이미지 : </InputText>
        <Input type="file" onChange={handleImgUpload} required />
      </InputFieldBox>
      <InputFieldBox>
        <InputText>회의실 예약 비용 : </InputText>
        <Input onChange={handleChange} name="pay" required />
      </InputFieldBox>
      <InputFieldBox>
        <InputText>회의실 부가설명 : </InputText>
        <TextArea onChange={handleChange} name="description" required />
      </InputFieldBox>
      <InputFieldBox>
        <SubmitButton>회의실 등록하기</SubmitButton>
      </InputFieldBox>
    </AddForm>
  );
};

export default AddOffice;