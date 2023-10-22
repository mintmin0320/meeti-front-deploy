import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

// apis
import { fetchAddSchedule } from '../../api/schedule';

// hooks
import { useColor } from "../../hooks/context/BackContext";

// icons
import Header from '../../common/Header';

import AddSchedule from '../../components/schedule/AddSchedule';

// bg-color
import backColor from '../../assets/color.png'

// CSS
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import {
  Container,
  BackColor,
  MainSection,
  TitleText,
} from '../../styles/CommonStyles';

// styles
const Section = styled.section`
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const AddSchedulePage = () => {
  const userId = localStorage.getItem('userId');
  const navigator = useNavigate();
  const { color } = useColor();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [scheduleForm, setScheduleForm] = useState({
    title: '',
    initTime: '',
    finishTime: '',
    place: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setScheduleForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const handleScheduleDate = (item) => {
    setDate([{
      ...date[0],
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    }]);
  };


  // 일정 등록
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date[0].endDate) {
      alert('종료 날짜를 선택해 주세요!');

      return;
    }

    const data = {
      title: scheduleForm.title,
      initTime: scheduleForm.initTime,
      finishTime: scheduleForm.finishTime,
      place: scheduleForm.place,
      color,
      start: date.startDate,
      end: date.endDate,
    };

    try {
      await fetchAddSchedule(userId, data);

      alert('일정 등록 성공!');

      navigator('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <MainSection>
        <BackColor src={backColor} style={{ opacity: 0.2 }} />
        <Header />
        <Section>
          <TitleText>일정 등록</TitleText>
          <AddSchedule
            date={date}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleScheduleDate={handleScheduleDate}
          />
        </Section>
      </MainSection>
    </Container>
  );
};

export default AddSchedulePage;