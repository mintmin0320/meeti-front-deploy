import styled from "styled-components";

export const ApprovalListWrap = styled.div`
  width: 90%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ApprovalItem = styled.div`
  width: 95%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px #d8d8d8;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Username = styled.p`
  width: 95%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
`;

export const RequestDetail = styled.p`
  width: 88%;
  height: 60px;
  display: flex;
  font-size: 15px;
  margin-top: 3px;
`;

export const FileBox = styled.div`
  width: calc(88% - 2px);
  height: 25px;
  border: solid 1px #bdbdbd;
  margin-bottom: 8px;
  border-radius: 3px;
`;

export const Form = styled.form`
  width: calc(88% - 2px);
  height: 40%;
  display: flex;
`;

export const DetailDecisionTextarea = styled.textarea`
  width: 80%;
  max-height: 60px;
  border: solid 1px #bdbdbd;
  border-radius: 3px;
  outline: none;
  overflow-y: auto;
`

export const SubmitButtonBox = styled.div`
  width: 20%;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SubmitButton = styled.button`
  width: 90%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:transparent;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;