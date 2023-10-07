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

const UserInfo = ({ username, role }) => {
  return (
    <>
      <Info>
        이름 l<Text>{username}</Text>
      </Info>
      <Info>
        등급 l<Text>{role}</Text>
      </Info>
    </>
  );
};

export default UserInfo;