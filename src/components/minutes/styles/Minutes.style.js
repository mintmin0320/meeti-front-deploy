import styled from 'styled-components';

export const Form = styled.form`
  width: 80%;
  height: 85%;
`;

// 상단 버튼
export const ButtonBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 18px;
  color: #8165df;
  background-color: #f0ebfa;
  cursor: pointer;

  &:hover {
    color: #f0ebfa;
    background-color: #8165df;
  }
`;

// 작성 - 우측 wrap
export const AddMinutesWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MinutesInfoWrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const MinutesInfoBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

export const InfoTitleBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-right: solid 1px #d8d8d8;
  background-color: #E6E0F8;
`;

export const InfoDataBox = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 8px 0;
  background-color: #fff;
`;

export const MicrophoneStatus = styled.p`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;

export const MinutesTitleBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-bottom: 25px;
`;

export const InfoTextBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #d8d8d8;
  border-left: none;
  border-radius: 8px 0 0 8px;
  background-color: #E6E0F8;
`;

export const Input = styled.input`
  width: 70%;
  height: calc(100% - 2px);
  border: none;
  outline: none;
  font-size: 17px;
  border: solid 1px #d8d8d8;
  border-radius: 0 8px 8px 0;
`;

export const TranscriptBox = styled.div`
  width: 100%;
  height: 70%;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: solid 1px #d8d8d8;
  background-color: #E6E0F8;
`;

export const Transcript = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  font-size: 18px;
  overflow-y: scroll;
  border: solid 1px #d8d8d8;
  border-top: none;
  border-radius: 0 0 8px 8px;
  background-color: #fff;
  word-wrap: break-word;  /* 긴 단어도 줄바꿈이 되도록 설정 */
  overflow-wrap: break-word;  /* 일반 텍스트도 줄바꿈이 되도록 설정 */
  overflow: hidden; 

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 0 8px 8px 0;
  background-color: #fff;
`;

export const Textarea = styled.textarea`
  width: calc(100% - 4px);
  height: calc(100% - 45px);
  border: solid 1px #d8d8d8;
  border-top: none;
  border-radius: 0 0 8px 8px;
  font-size: 18px;
  outline: none;
`;

export const MainDiv = styled.div`
  width: 80%;
  height: 70%;
  border-radius: 10px;
`;

export const AddButton = styled.div`
  width: 32px;
  height: 32px;
  background: #f0ebfa;
  border-radius: 5px;
  cursor: pointer;
  color: #6f5cea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeadTitle = styled.div`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;

export const HeaderRight = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 100px;
`;
