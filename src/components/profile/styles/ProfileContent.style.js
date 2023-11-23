import styled from 'styled-components';

export const ProfileSection = styled.section`
  width: 100%;
  height: 70%;
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
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBox = styled.div`
  width: 40%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5px;
  margin-left: 20px;
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