import { useState, useCallback, Suspense } from "react";

import Header from '../../common/Header';
import AddApproval from "../../components/approval/AddApproval";
import ApprovalRequestList from '../../components/approval/ApprovalRequestList';

import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText,
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";

import {
  useAddApproval,
  useDecisionApproval
} from '../../query-hooks/useApproval';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const ApprovalPage = () => {
  const userId = localStorage.getItem("userId");

  const [approvalForm, setApprovalForm] = useState({
    file: '',
    request: '',
    adminUsername: '',
  });
  const [decisionForm, setDecisionForm] = useState({
    decisionDetail: '',
    decision: '',
  });
  const [reservation, setReservation] = useState('');
  const [isSelectedAdmin, setIsSelectedAdmin] = useState(null);
  const [isSelectedReservation, setIsSelectedAdminReservation] = useState(null);

  const { decisionApproval } = useDecisionApproval();
  const { submit } = useAddApproval();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === 'request') {
      setApprovalForm((prevState) => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setDecisionForm((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  }, []);

  // 승인 결정
  const handleDecision = async (approvalId, decision) => {
    const params = {
      decisionDetail: decisionForm.decisionDetail,
      decision,
    };

    await decisionApproval({ approvalId, params });
  };

  const handleClick = (param, check) => {
    if (check === "admin") {
      setApprovalForm((prevState) => ({
        ...prevState,
        adminUsername: param,
      }));
    } else {
      setReservation(param);
    }
  };

  // 파일 업로드
  const handleImgUpload = (e) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    // 파일 크기 검증
    if (file.size > MAX_FILE_SIZE) {
      alert('파일 크기는 5MB를 초과할 수 없습니다.');

      return;
    }

    setApprovalForm((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  // 승인 요청 등록
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("request", approvalForm.request);
    formData.append("adminUsername", approvalForm.adminUsername);
    formData.append("file", approvalForm.file);
    formData.append("placeName", reservation);

    await submit({ userId, formData });

    setApprovalForm(prevState => ({ ...prevState, request: '' }));
    setIsSelectedAdmin(null);
    setIsSelectedAdminReservation(null);
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
          <TitleText>승인요청</TitleText>
          <ApprovalRequestList
            userId={userId}
            handleDecision={handleDecision}
            handleChange={handleChange}
          />
        </LeftSection>
        <RightSection>
          <Suspense fallback='Loading'>
            <AddApproval
              userId={userId}
              handleChange={handleChange}
              handleClick={handleClick}
              handleImgUpload={handleImgUpload}
              handleSubmit={handleSubmit}
              isSelectedAdmin={isSelectedAdmin}
              isSelectedReservation={isSelectedReservation}
              setIsSelectedAdmin={setIsSelectedAdmin}
              setIsSelectedAdminReservation={setIsSelectedAdminReservation}
            />
          </Suspense>
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ApprovalPage;
