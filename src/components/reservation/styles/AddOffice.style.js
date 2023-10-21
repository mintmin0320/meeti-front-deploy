import styled from 'styled-components';

export const AddForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputFieldBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;

export const InputText = styled.p`
  width: 30%;
  height: 100%;
  color: #8165df;
`;

export const Input = styled.input`
  width: 50%;
  height: 30px;
  font-size: 14px;
  border: none;
`;

export const Select = styled.select`
  width: 50%;
  height: 30px;
  font-size: 14px;
  border: none;
`;

export const TextArea = styled.textarea`
  width: 50%;
  height: 60px;
  font-size: 14px;
  border: none;
  outline: none;
`;

export const SubmitButton = styled.button`
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #8165df;
  margin-top: 30px;
  cursor: pointer;
`;