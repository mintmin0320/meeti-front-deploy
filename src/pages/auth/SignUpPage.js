import SignUp from "../../components/auth/SignUp";

import color from "./../../assets/color.png";
import {
  Container,
  MainSection,
  BackColor
} from '../../styles/CommonStyles';

const SignUpTypePage = () => {
  return (
    <Container>
      <MainSection>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <SignUp />
      </MainSection>
    </Container>
  );
};

export default SignUpTypePage;
