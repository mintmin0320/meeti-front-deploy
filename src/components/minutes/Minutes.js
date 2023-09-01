import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled, { css } from "styled-components";

// icons
import { BsFillMicFill, BsFillPencilFill } from "react-icons/bs";
import { BiStop, BiSave } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";

import {
  AiOutlinePlusCircle,
  AiFillDelete,
  AiOutlineShareAlt,
  AiFillPrinter,
} from "react-icons/ai";

import { RiPlayList2Fill } from "react-icons/ri";

function SpeechPage() {
  const [isOpen, setIsOpen] = useState(true);
  const today = new Date();

  const textfile =
    "임시 회의 내용 입니다~ 테스트입니다~ 임시 회의 내용 입니다~ 테스트입니다~임시 회의 내용 입니다~ 테스트입니다~임시 회의 내용 입니다~ 테스트입니다~임시 회의 내용 입니다~ 테스트입니다~임시 회의 내용 입니다~ 테스트입니다~";
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleOnStartBtn = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "ko",
    });
  };

  const handleOnStopBtn = () => {
    SpeechRecognition.stopListening();
    // prompt("회의록을 저장하시겠습니까?\n제목을 입력해주세요.");
  };
  const handleOnSaveBtn = () => {
    SpeechRecognition.stopListening();
    prompt("회의록을 저장하시겠습니까?\n제목을 입력해주세요.");
    resetTranscript();
  };
  const handleOnDeleteByn = () => {
    prompt("회의록을 삭제하시겠습니까?");
  };

  // 날짜

  return (
    <>
      <Header>
        <Header>
          <RiPlayList2Fill className="true" style={{ padding: "0" }} />
          <HeadTitle>Minutes</HeadTitle>
        </Header>
        <HeaderRight>
          <AddButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <AiOutlinePlusCircle /> : <RiPlayList2Fill />}
          </AddButton>
        </HeaderRight>
      </Header>

      {isOpen ? (
        <MainDiv>
          <TopTableDiv>
            <TopTableSub>
              <TopTableTitle>문서번호</TopTableTitle>
              <TopTableContacts>0001</TopTableContacts>
            </TopTableSub>
            <TopTableSub>
              <TopTableTitle>회의일자</TopTableTitle>
              <TopTableContacts>2023-08-29</TopTableContacts>
            </TopTableSub>
            <TopTableSub>
              <TopTableTitle>작성자</TopTableTitle>
              <TopTableContacts>전유진</TopTableContacts>
            </TopTableSub>
          </TopTableDiv>
          <ButtonsDiv>
            <ListenButton>
              <BsFillPencilFill />
            </ListenButton>
            <ListenButton>
              <AiOutlineShareAlt />
            </ListenButton>
            <ListenButton>
              <AiFillPrinter />
            </ListenButton>
            <ListenDelButton>
              <AiFillDelete />
            </ListenDelButton>
          </ButtonsDiv>
          <ScriptDiv>
            <TitleText>회의내용</TitleText>

            <Script>{textfile}</Script>
          </ScriptDiv>
        </MainDiv>
      ) : (
        <MainDiv>
          <TopTableDiv>
            <TopTableSub>
              <TopTableTitle>문서번호</TopTableTitle>
              <TopTableInput></TopTableInput>
            </TopTableSub>
            <TopTableSub>
              <TopTableTitle>회의일자</TopTableTitle>
              <TopTableContacts>
                {today.getFullYear() +
                  "-" +
                  today.getMonth() +
                  "-" +
                  today.getDate()}
              </TopTableContacts>
            </TopTableSub>
            <TopTableSub>
              <TopTableTitle>작성자</TopTableTitle>
              <TopTableInput></TopTableInput>
            </TopTableSub>
          </TopTableDiv>
          <Textdiv>Microphone: {listening ? "🟢" : "🔴"}</Textdiv>
          <ButtonsDiv>
            <ListenButton onClick={() => handleOnStartBtn()}>
              <BsFillMicFill />
            </ListenButton>
            <ListenButton onClick={() => handleOnStopBtn()}>
              <BiStop />
            </ListenButton>
            <ListenButton onClick={resetTranscript}>
              <VscDebugRestart />
            </ListenButton>
            <ListenButton onClick={() => handleOnSaveBtn()}>
              <BiSave />
            </ListenButton>
          </ButtonsDiv>

          <ScriptDiv>
            <TitleText>회의내용</TitleText>
            <Script>{transcript}</Script>
          </ScriptDiv>
          {/* <ScriptDiv>{textfile}</ScriptDiv> */}
        </MainDiv>
      )}
    </>
  );
}

// style
const TopTableDiv = styled.div`
  margin: 20px;
  display: flex;
`;
const TopTableSub = styled.div`
  width: 100%;
  margin: 10px;
  font-size: 12px;
  display: flex;
  margin: 10px;
  height: 30px;
`;
const TopTableTitle = styled.div`
  width: 30%;
  border-right: 1px solid #6d6272;
  text-align: center;
  background-color: #f0ebfa;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopTableInput = styled.input`
  width: 70%;
  border: none;
`;
const TopTableContacts = styled.div`
  width: 70%;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainDiv = styled.div`
  width: 80%;
  height: 70%;
  border-radius: 10px;
  background-color: #f8f8f8;
`;

const AddButton = styled.div`
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
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const HeadTitle = styled.div`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;
const HeaderRight = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 100px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListenButton = styled.div`
  color: #8165df;
  background-color: #f0ebfa;
  padding: 10px;
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;
  width: 20%;
  align-items: center;
  display: flex;
  justify-content: center;
  &:hover {
    color: #f0ebfa;
    background-color: #8165df;
  }
`;

const ListenDelButton = styled.div`
  color: #ea5c5c;
  background-color: #faebeb;
  padding: 10px;
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;
  width: 20%;
  align-items: center;
  display: flex;
  justify-content: center;
  &:hover {
    color: #faebeb;
    background-color: #ea5c5c;
  }
`;

const Textdiv = styled.div`
  font-size: 12px;
`;

const TitleText = styled.span`
  background-color: #f0ebfa;
  padding: 5px;
  font-size: 14px;
  border-right: 1px solid #6d6272;
  width: 13%;
`;
const ScriptDiv = styled.div`
  margin: 30px;
  background: white;
  font-size: 14px;
  width: 90%;
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const Script = styled.div`
  font-size: 14px;
  overflow: scroll;
  width: 87%;
`;
export default SpeechPage;
