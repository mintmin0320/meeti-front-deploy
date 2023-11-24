import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import * as S from './styles/ApprovalReqList.style';

import { fetchApprovalData } from '../../query-hooks/useApproval';

const ApprovalRequestList = ({
  userId,
  handleDecision,
  handleChange,
}) => {
  const [decision, setDecision] = useState('');

  const { data: approvalList } = useQuery(fetchApprovalData(userId));

  return (
    <S.ApprovalListWrap>
      {approvalList?.map((item) => (
        <S.ApprovalItem key={item?.id}>
          <S.Username>{item?.requestUsername}</S.Username>
          <S.RequestDetail>{item?.requestDetail}</S.RequestDetail>
          <S.FileBox>
            <a href={item?.requestFile}>첨부파일</a>
          </S.FileBox>
          <S.Form
            onSubmit={(e) => {
              handleDecision(item?.id, decision);
              e.preventDefault()
            }
            }>
            <S.DetailDecisionTextarea
              name='decisionDetail'
              onChange={handleChange}
              required
            />
            <S.SubmitButtonBox>
              <S.SubmitButton
                style={{ backgroundColor: '#01DF01' }}
                onClick={() => setDecision("CONFIRM")}
                aria-label='승인'
              >
                승인
              </S.SubmitButton>
              <S.SubmitButton
                style={{ backgroundColor: '#FE2E2E' }}
                onClick={() => setDecision("REJECT")}
                aria-label='반려'
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