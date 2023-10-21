import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../common/Header';
import AddOffice from '../../components/reservation/AddOffice';

import color from "./../../assets/color.png";

// styles
import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText,
} from '../../styles/CommonStyles';

// apis
import { fetchAddOffice } from '../../api/reservation';

const AddOfficePage = () => {
  const userId = localStorage.getItem('userId');
  const navigator = useNavigate();
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

  const handleChange = (e) => {
    e.preventDefault();

    setOfficeForm({
      ...officeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleImgUpload = (e) => {
    if (!e.target.files) {
      return;
    }

    setOfficeForm({
      ...officeForm,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      placeName: officeForm.placeName,
      pay: officeForm.pay,
      detailAddress: officeForm.detailAddress,
      address: officeForm.address,
      description: officeForm.description,
      telNum: officeForm.telNum,
    };

    formData.append("image", officeForm.file);
    formData.append("officeRegDto", data);

    try {
      await fetchAddOffice(userId, formData);

      alert('등록 성공!');
      navigator('./reservation');
    } catch (error) {
      alert('등록 실패!');
      console.log(error);
    }
  };

  return (
    <Container>
      <MainSection>
        <Header />
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <LeftSection>
          <TitleText>오피스 등록</TitleText>
        </LeftSection>
        <RightSection>
          <AddOffice
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleImgUpload={handleImgUpload}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default AddOfficePage;