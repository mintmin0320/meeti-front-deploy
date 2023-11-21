import Header from '../Header';

import {
  Container,
  BackColor,
  MainSection
} from '../../styles/CommonStyles';
import color from "../../assets/color.png";

const ContainerSkeletonUI = () => {
  return (
    <Container>
      <MainSection>
        <BackColor
          src={color}
          alt='background image'
          style={{ opacity: 0.2 }}
        />
        <Header />
      </MainSection>
    </Container>
  )
}

export default ContainerSkeletonUI;