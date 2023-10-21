import React, { useState, useCallback, useEffect } from "react";

import AddApproval from "../../components/approval/AddApproval";

// bg-color
import color from "./../../assets/color.png";

import Header from '../../common/Header';
import ApprovalRequestList from '../../components/approval/ApprovalRequestList';

// apis
import {
  fetchApprovalList,
  fetchAdminList,
  fetchAddApproval,
  fetchDecisionApproval,
  fetchWaitReservationList
} from '../../api/approval';

// styles
import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText,
} from '../../styles/CommonStyles';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const ApprovalPage = () => {
  const userId = localStorage.getItem("userId");
  const formData = new FormData();
  const [approvalForm, setApprovalForm] = useState({
    file: '',
    request: '',
    adminUsername: '',
  });
  const [decisionForm, setDecisionForm] = useState({
    decisionDetail: '',
    decision: '',
  });
  const [refreshKey, setRefreshKey] = useState(false);
  const [approvalList, setApprovalList] = useState([]);
  const [adminList, setAdminList] = useState([]);
  const [reservationList, setReservationList] = useState([]);
  const [reservation, setReservation] = useState('');

  /*
    결재 요청 처리 로직

    결재 요청 조회
  */

  useEffect(() => {
    getApprovalList();
  }, [refreshKey]);

  useEffect(() => {
    getAdminList();
  }, []);

  useEffect(() => {
    getWaitReservationList();
  }, []);

  const getApprovalList = async () => {
    try {
      const res = await fetchApprovalList(userId);
      setApprovalList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 대기상태 예약 조회
  const getWaitReservationList = async () => {
    try {
      const res = await fetchWaitReservationList(userId);
      setReservationList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

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
  const handleDecisionApproval = async (approvalId, decision) => {
    const data = {
      decisionDetail: decisionForm.decisionDetail,
      decision,
    };

    try {
      alert('정상 처리되었습니다.');
      await fetchDecisionApproval(approvalId, data);
      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  /*
    결재 요청 등록 로직

    관리자 이름 클릭
   */
  const getAdminList = async () => {
    try {
      const res = await fetchAdminList(userId);
      setAdminList(res?.data);
    } catch (error) {
      console.log(error);
    }
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

    formData.append("request", approvalForm.request);
    formData.append("adminUsername", approvalForm.adminUsername);
    formData.append("file", approvalForm.file);
    formData.append("placeName", reservation);

    try {
      alert('승인 요청 전송!');

      await fetchAddApproval(userId, formData);
      setDecisionForm(prevState => ({ ...prevState, request: '' }));
      getAdminList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <TitleText>승인요청</TitleText>
          <ApprovalRequestList
            approvalList={approvalList}
            handleDecisionApproval={handleDecisionApproval}
            handleChange={handleChange}
          />
        </LeftSection>
        <RightSection>
          <AddApproval
            adminList={adminList}
            reservationList={reservationList}
            handleChange={handleChange}
            handleClick={handleClick}
            handleImgUpload={handleImgUpload}
            handleSubmit={handleSubmit}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ApprovalPage;
