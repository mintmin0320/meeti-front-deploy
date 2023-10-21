import React from "react";

// styles
import * as S from './styles/AddOffice.style';


const AddOffice = ({
  handleSubmit,
  handleChange,
  handleImgUpload
}) => {
  return (
    <S.AddForm onSubmit={handleSubmit}>
      <S.InputFieldBox>
        <S.InputText>회의실 이름 : </S.InputText>
        <S.Input onChange={handleChange} name="placeName" required />
      </S.InputFieldBox>
      <S.InputFieldBox>
        <S.InputText>자치구 : </S.InputText>
        <S.Select name="address" id="address" onChange={handleChange} required>
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
        </S.Select>
      </S.InputFieldBox>
      <S.InputFieldBox>
        <S.InputText>회의실 상세주소 : </S.InputText>
        <S.Input onChange={handleChange} name="detailAddress" required />
      </S.InputFieldBox>
      <S.InputFieldBox>
        <S.InputText>회의실 전화번호 : </S.InputText>
        <S.Input type="tel" onChange={handleChange} name="telNum" required />
      </S.InputFieldBox>
      <S.InputFieldBox>
        <S.InputText>회의실 이미지 : </S.InputText>
        <S.Input type="file" onChange={handleImgUpload} required />
      </S.InputFieldBox>
      <S.InputFieldBox>
        <S.InputText>회의실 예약 비용 : </S.InputText>
        <S.Input onChange={handleChange} name="pay" required />
      </S.InputFieldBox>
      <S.InputFieldBox>
        <S.InputText>회의실 부가설명 : </S.InputText>
        <S.TextArea onChange={handleChange} name="description" required />
      </S.InputFieldBox>
      <S.InputFieldBox>
        <S.SubmitButton>회의실 등록하기</S.SubmitButton>
      </S.InputFieldBox>
    </S.AddForm>
  );
};

export default AddOffice;
