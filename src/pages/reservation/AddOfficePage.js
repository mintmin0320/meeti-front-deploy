import { useState } from 'react';

import Header from '../../common/Header';
import AddOffice from '../../components/reservation/AddOffice';

import color from "./../../assets/color.png";

import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText,
} from '../../styles/CommonStyles';

import { useAddOffice } from '../../query-hooks/useReservation';

const AddOfficePage = () => {
  const userId = localStorage.getItem('userId');

  const { submit } = useAddOffice();

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

    const formData = new FormData();

    formData.append("placeName", officeForm.placeName);
    formData.append("pay", officeForm.pay);
    formData.append("description", officeForm.description);
    formData.append("address", officeForm.address);
    formData.append("detailAddress", officeForm.detailAddress);
    formData.append("image", officeForm.file);
    formData.append("telNum", officeForm.telNum);

    await submit({ userId, formData });
  };

  return (
    <Container>
      <MainSection>
        <Header />
        <BackColor
          src={color}
          alt='background image'
          style={{ opacity: 0.2 }}
        />
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