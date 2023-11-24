import styled from "styled-components";

export const SignUpWrap = styled.div`
  margin: auto;
  z-index: 3;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #535571;
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #535571;;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 9rem;
  height: 11.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: solid #9c9c9c 0.5px;
  box-shadow: 1px 1px 1px rgb(0.1, 0.1, 0.1, 0.1);
  margin: 0 25px;
  margin-top: 30px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Text = styled.div`
  color: #8165df;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

export const Br = styled.div`
  width: 60%;
  height: 1px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #9c9c9c;
`;

export const JoinInfoText = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #9c9c9c;
`;