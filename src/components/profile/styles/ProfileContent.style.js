import styled from 'styled-components';

export const ProfileSection = styled.section`
  width: 100%;
  z-index: 3;
`;

export const PageTitle = styled.h1`
  height: 30px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: solid 1px #d8d8d8;
`;

export const ButtonBox = styled.div`
  width: 40%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  padding: 5px 9px;
  font-size: 14px;
  font-weight: 700;
  border: solid 1px #8165df;
  border-radius: 5px;
  background: none;
  color: #8165df;
  cursor: pointer;

  &:hover {
    background: #8165df;
    color: #fff;
  }
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
  width: 128px;
  height: 128px;
  margin-right: 50px;
  border-radius: 50%;
  border: solid 1px #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  float: left;
`;

export const Input = styled.input`
  width: 150px;
  height: 80px;
  border: 0;
`;