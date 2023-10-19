import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// apis
import {
  fetchApprovalRequest,
  fetchGetApprovalList,
  fetchRejectRequest
} from '../../api/approval';

// styles
const ApprovalListWrap = styled.div`
  width: 90%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ApprovalItem = styled.div`
  width: 95%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px #d8d8d8;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const NameBox = styled.div`
  width: 95%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
`;

const ContentBox = styled.div`
  width: 88%;
  height: 60px;
  display: flex;
  font-size: 15px;
  margin-top: 3px;
  /* background-color: red; */
`;

const FileBox = styled.div`
  width: calc(88% - 2px);
  height: 25px;
  border: solid 1px #bdbdbd;
  margin-bottom: 8px;
  border-radius: 3px;
`;

const Form = styled.form`
  width: calc(88% - 2px);
  height: 40%;
  display: flex;
`;

const ApprovalTextarea = styled.textarea`
  width: 80%;
  max-height: 60px;
  border: solid 1px #bdbdbd;
  border-radius: 3px;
  outline: none;
  overflow-y: auto;
`

const ApprovalButtonBox = styled.div`
  width: 20%;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const ApprovalButton = styled.button`
  width: 90%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:transparent;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const ReqApprovalList = ({
}) => {
  const userId = localStorage.getItem("userId");
  const [approvalList, setApprovalList] = useState([]);
  const [refreshKey, setRefreshKey] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    // getApprovalList();
  }, [refreshKey]);

  const getApprovalList = () => {
    try {
      fetchGetApprovalList(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprovalButton = () => {
    try {
      fetchApprovalRequest(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejectButton = () => {
    try {
      fetchRejectRequest(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const data = [
    { name: "하민1", content: "3월 31일날 미팅하려고" },
    { name: "하민2", content: "3월 31일날 미팅하려고" },
    { name: "하민3", content: "3월 31일날 미팅하려고" },
    { name: "하민4", content: "3월 31일날 미팅하려고" },
    { name: "하민5", content: "3월 31일날 미팅하려고" },
    { name: "하민6", content: "3월 31일날 미팅하려고" },
  ];

  return (
    <ApprovalListWrap>
      {data.map((item) => (
        <ApprovalItem key={item.name}>
          <NameBox>{item.name}</NameBox>
          <ContentBox>{item.content}</ContentBox>
          <FileBox></FileBox>
          <Form>
            <ApprovalTextarea
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <ApprovalButtonBox>
              <ApprovalButton
                style={{ backgroundColor: '#FE2E2E' }}
                onClick={handleApprovalButton}
              >
                승인
              </ApprovalButton>
              <ApprovalButton
                style={{ backgroundColor: '#01DF01' }}
                onClick={handleRejectButton}
              >
                반려
              </ApprovalButton>
            </ApprovalButtonBox>
          </Form>
        </ApprovalItem>
      ))}
    </ApprovalListWrap>
  );
};

export default ReqApprovalList;