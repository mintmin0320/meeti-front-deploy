import React from "react";
import styled from "styled-components";

// styles
const UserInfoBox = styled.div`
  width: 80%;
  display: inline-block;
`;

const Info = styled.div`
  display: flex;
  margin: 30px;
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
    <UserInfoBox>
      <Info>
        이름 l <Text>{username}</Text>
      </Info>
      <Info>
        등급 l <Text>{role}</Text>
      </Info>
      <Info>
        소속 l <Text></Text>
      </Info>
      <Info>
        이메일 l <Text></Text>
      </Info>
      <Info>
        연락처 l <Text></Text>
      </Info>
    </UserInfoBox>
  );
};

export default UserInfo;
