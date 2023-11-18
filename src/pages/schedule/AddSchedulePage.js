import { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import Header from '../../common/Header';
import AddSchedule from '../../components/schedule/AddSchedule';
import backColor from '../../assets/color.png'

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import {
  Container,
  BackColor,
  MainSection,
  TitleText,
} from '../../styles/CommonStyles';
import * as S from './styles/AddSchedulePage.style';

import { useColor } from "../../hooks/context/BackContext";
import { useAddSchedule } from '../../query-hooks/useSchedule';

const AddSchedulePage = () => {
  const navigator = useNavigate();
  const { handleSubmit } = useAddSchedule();
  const { color } = useColor();

  const userId = localStorage.getItem('userId');

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
  const handleFormSubmit = async (e) => {
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
      start: date[0].startDate,
      end: date[0].endDate,
    };

    try {
      await handleSubmit(userId, data);

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
        <S.Section>
          <TitleText>일정 등록</TitleText>
          <AddSchedule
            date={date}
            handleChange={handleChange}
            handleSubmit={handleFormSubmit}
            handleScheduleDate={handleScheduleDate}
          />
        </S.Section>
      </MainSection>
    </Container>
  );
};

export default AddSchedulePage;