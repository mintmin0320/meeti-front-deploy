import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import AddApproval from "../../components/approval/AddApproval";

// bg-color
import color from "./../../assets/color.png";

import Header from '../../common/Header';
import ApprovalRequestList from '../../components/approval/ApprovalRequestList';

// styles
import {
  Container,
  BackColor,
  MainSection,
  LeftSection
} from '../../styles/CommonStyles';

// apis
import {
  fetchApprovalList,
  fetchAdminList,
  fetchAddApproval,
  fetchDecisionApproval
} from '../../api/approval';

const Title = styled.p`
  height: 30px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
`;

const RightSection = styled.section`
  width: 60vw;
  height: 340px;
  border-radius: 20px;
  z-index: 3;
`;

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


  const getApprovalList = async () => {
    try {
      const res = await fetchApprovalList(userId);
      setApprovalList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 승인 결정
  const handleDecisionApproval = async (approvalId, decision) => {
    setDecisionForm({
      ...decisionForm,
      decision,
    });

    try {
      await fetchDecisionApproval(approvalId, decisionForm);
      setRefreshKey(!refreshKey);
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

  const handleAdminName = (adminUsername) => {
    setApprovalForm((prevState) => ({
      ...prevState,
      adminUsername,
    }));
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

    try {
      await fetchAddApproval(userId, formData);
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
          <Title>승인요청</Title>
          <ApprovalRequestList
            approvalList={approvalList}
            handleDecisionApproval={handleDecisionApproval}
            handleChange={handleChange}
          />
        </LeftSection>
        <RightSection>
          <AddApproval
            adminList={adminList}
            handleChange={handleChange}
            handleAdminName={handleAdminName}
            handleImgUpload={handleImgUpload}
            handleSubmit={handleSubmit}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ApprovalPage;
