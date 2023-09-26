import React from 'react';
import styled from 'styled-components';

// styles
const Info = styled.div`
  display: flex;
  margin: 15px;
  color: #9c9c9c;
  white-space: nowrap;
  overflow: hidden;
`;

const Text = styled.div`
  margin-left: 15px;
  color: black;
  white-space: pre-wrap;
`;

const UserInfo = ({ username }) => {
  return (
    <>
      <Info>
        이름 l<Text>{username}</Text>
      </Info>
      <Info>
        이메일 l<Text>juhee01176@gmail.com</Text>
      </Info>
      <Info>
        전화번호 l<Text>010-3264-5936</Text>
      </Info>
    </>
  );
};

export default UserInfo;