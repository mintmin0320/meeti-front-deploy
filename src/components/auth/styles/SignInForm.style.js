import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #8165df;
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.7em;
  background-color: white;
  border: solid #9c9c9c 0.1px;
  width: 280px;
`;

export const SignupLink = styled(Link)`
  font-size: 1;
  color: #8165df;
`;

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.1);
  font-size: 1.1rem;
  margin: 3rem auto;
  padding: 1vh 4vh;
  color: white;
  background-color: #8165df;
  cursor: pointer;
`;
