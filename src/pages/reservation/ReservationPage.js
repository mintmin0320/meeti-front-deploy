import Header from '../../common/Header';
import OfficeList from "../../components/reservation/OfficeList";
import ReservationList from '../../components/reservation/ReservationList';

import color from "./../../assets/color.png";

import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText,
} from '../../styles/CommonStyles';

const ReservationPage = () => {
  const userId = localStorage.getItem('userId');

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
          <TitleText>공유 오피스 예약</TitleText>
          <ReservationList userId={userId} />
        </LeftSection>
        <RightSection>
          <OfficeList />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ReservationPage;
