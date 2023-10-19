import React, { useState } from 'react';

// styles
import * as S from './styles/ApprovalReqList.style';

const ApprovalRequestList = ({
  approvalList,
  handleDecisionApproval,
  handleChange,
}) => {
  const [decision, setDecision] = useState('');

  return (
    <S.ApprovalListWrap>
      {approvalList.map((item) => (
        <S.ApprovalItem key={item?.id}>
          <S.Username>{item?.requestUsername}</S.Username>
          <S.RequestDetail>{item?.requestDetail}</S.RequestDetail>
          <S.FileBox>
            <a href={item?.requestFile}>첨부파일</a>
          </S.FileBox>
          <S.Form onSubmit={() => handleDecisionApproval(item?.id, decision)}>
            <S.DetailDecisionTextarea
              name='decisionDetail'
              onChange={handleChange}
              required
            />
            <S.SubmitButtonBox>
              <S.SubmitButton
                style={{ backgroundColor: '#01DF01' }}
                onClick={setDecision("CONFIRM")}
              >
                승인
              </S.SubmitButton>
              <S.SubmitButton
                style={{ backgroundColor: '#FE2E2E' }}
                onClick={setDecision("REJECT")}
              >
                반려
              </S.SubmitButton>
            </S.SubmitButtonBox>
          </S.Form>
        </S.ApprovalItem>
      ))}
    </S.ApprovalListWrap>
  );
};

export default ApprovalRequestList;