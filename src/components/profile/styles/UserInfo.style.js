import styled from 'styled-components';

export const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: solid 1px #d8d8d8;
`;

export const UserInfoBox = styled.div`
  width: 80%;
`;

export const InfoLabel = styled.label`
  display: flex;
  margin: 40px;
  color: #9c9c9c;
  white-space: nowrap;
  overflow: hidden;

`;

export const Text = styled.div`
  margin-left: 15px;
  color: black;
  white-space: pre-wrap;
`;

export const NameInput = styled.input`
  width: 100%;
  height: 20px;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const AddProfileBox = styled.button`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: solid 1px #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 150px;
  height: 80px;
  border: 0;
`;