import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import Calendar from "../../components/schedule/Calendar";
import ScheduleList from "../../components/schedule/ScheduleList";
import Header from '../../common/Header';

import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";
import * as S from './styles/SchedulePage.style';

import {
  AiOutlineCalendar,
  AiOutlinePlusCircle
} from "../../common/icons/index";

import { fetchSchedule } from '../../query-hooks/useSchedule';

const CalendarPage = () => {
  const userId = localStorage.getItem('userId');

  const navigator = useNavigate();
  const { data: scheduleList } = useQuery(fetchSchedule(userId));

  return (
    <Container>
      <MainSection>
        <BackColor src={color} alt='background image' style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <TitleText>일정</TitleText>
          <ScheduleList
            scheduleList={scheduleList}
          />
        </LeftSection>
        <RightSection>
          <S.TopBox>
            <S.TitleBox>
              <AiOutlineCalendar className="true" style={{ padding: "0" }} />
              <S.Title>Calendar</S.Title>
            </S.TitleBox>
            <S.AddButtonBox>
              <S.NavigatorButton
                onClick={() => { navigator('/add-schedule'); }}
              >
                <AiOutlinePlusCircle size='20px' />
              </S.NavigatorButton>
            </S.AddButtonBox>
          </S.TopBox>
          <Calendar
            scheduleList={scheduleList}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default CalendarPage;
