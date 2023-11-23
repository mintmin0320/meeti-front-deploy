import Header from "../../common/Header";
import ProfileContent from '../../components/profile/ProfileContent';

import {
  Container,
  BackColor,
  MainSection
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";

import { useAccountDeletion, useSignOut } from '../../query-hooks/useAuth';

const ProfilePage = () => {
  const { handleSignOut } = useSignOut();
  const { handleAccountDeletion } = useAccountDeletion()

  return (
    <Container>
      <MainSection>
        <BackColor
          src={color}
          alt='background image'
          style={{ opacity: 0.2 }}
        />
        <Header />
        <ProfileContent
          handleAccountDeletion={handleAccountDeletion}
          handleSignOut={handleSignOut}
        />
      </MainSection>
    </Container>
  );
};

export default ProfilePage;
