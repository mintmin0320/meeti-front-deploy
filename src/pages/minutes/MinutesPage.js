import { useState } from "react";
import { useQuery } from '@tanstack/react-query';

import Header from '../../common/Header';
import Minutes from "./../../components/minutes/Minutes";
import MinutesList from "./../../components/minutes/MinutesList";

import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";

import { fetchMinutes } from '../../query-hooks/useMinutes';

const MinutesPage = () => {
  const userId = localStorage.getItem('userId');

  const [minutes, setMinutes] = useState({});

  const { data: minutesList } = useQuery(fetchMinutes(userId))

  const handleDetailMinutes = (minutesData) => {
    setMinutes(minutesData);
  };

  return (
    <Container>
      <MainSection>
        <BackColor
          src={color}
          alt='background image'
          style={{ opacity: 0.2 }}
        />
        <Header />
        <LeftSection>
          <TitleText>회의록</TitleText>
          <MinutesList
            minutesList={minutesList}
            handleDetailMinutes={handleDetailMinutes}
          />
        </LeftSection>
        <RightSection>
          <Minutes
            minutes={minutes}
            setMinutes={setMinutes}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default MinutesPage;
