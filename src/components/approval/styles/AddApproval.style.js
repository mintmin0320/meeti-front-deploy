import styled from "styled-components";

export const TitleBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

export const PageTitle = styled.p`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;

export const InfoText = styled.p`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

export const AdminInfoBox = styled.div`
  width: 85%;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: solid 1px #bdbdbd;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const AdminInfo = styled.button`
  width: 75px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border: solid 1px #bdbdbd;
  font-size: 14px;
  border-radius: 12px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

export const FileInputBox = styled.div`
  width: 85%;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: solid 1px #bdbdbd;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0.5px solid #535571;
`;

export const InputText = styled.p`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  background: #f2f2f2;
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

export const RequestTextarea = styled.textarea`
  width: calc(85% - 4px);
  height: 80px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  outline: none;
  overflow-y: auto;
  font-size: 15px;
  border-radius: 8px;
`;

export const SubmitButton = styled.button`
  width: 111px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  background: #8165df;
  color: #ffffff;
  margin-top: 20px;
  margin-left: 8px;
  cursor: pointer;
`;