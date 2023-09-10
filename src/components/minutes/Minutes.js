import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled, { css } from "styled-components";

// icons
import { BsFillMicFill, BsFillPencilFill } from "react-icons/bs";
import { BiStop, BiSave } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { RiPlayList2Fill } from "react-icons/ri";
import {
  AiOutlinePlusCircle,
  AiFillDelete,
  AiOutlineShareAlt,
  AiFillPrinter,
} from "react-icons/ai";
import { fetchAddMinutes, fetchDeleteMinutes } from '../../api/minutes';

// styles
const TopTableDiv = styled.div`
  margin: 20px;
  display: flex;
`;

const TopTableSub = styled.div`
  width: 100%;
  font-size: 11px;
  display: flex;
  height: 35px;
`;

const TitleBox = styled.div`
  width: 65%;
  font-size: 11px;
  display: flex;
  height: 35px;
  margin: auto;
`;

const TitleDiv = styled.div`
  width: 75%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const TopTableTitle = styled.div`
  width: 25%;
  border-right: 1px solid #6d6272;
  text-align: center;
  background-color: #f0ebfa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopTableInput = styled.input`
  width: 75%;
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

const MainForm = styled.form`
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
  width: 13%;
  padding: 5px;
  font-size: 14px;
  border-right: 1px solid #6d6272;
  background-color: #f0ebfa;
  display: flex;
  justify-content: center;
  align-items: center;
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

const SpeechPage = ({ detail = {} }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState(null);
  const [check, setCheck] = useState(false);
  const defaultDetail = {
    id: "",
    date: "",
    username: "",
    title: "",
    details: ""
  };

  const finalDetail = { ...defaultDetail, ...detail };

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

  const handleOnSaveBtn = async () => {
    SpeechRecognition.stopListening();
    try {
      const data = {
        title,
        detail: transcript,
      }
      const res = await fetchAddMinutes(data);

      window.location.reload();

      console.log(res)
    } catch (error) {
      console.log(error);
    }
    resetTranscript();
  };

  const handleOnDeleteBtn = async (id) => {
    try {
      await fetchDeleteMinutes(id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    alert('회의록 삭제완료');
  };

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
              <TopTableContacts>{finalDetail.id}</TopTableContacts>
            </TopTableSub>
            <TopTableSub>
              <TopTableTitle>회의일자</TopTableTitle>
              <TopTableContacts>{finalDetail.date}</TopTableContacts>
            </TopTableSub>
            <TopTableSub>
              <TopTableTitle>작성자</TopTableTitle>
              <TopTableContacts>{finalDetail.username}</TopTableContacts>
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
            <ListenDelButton onClick={() => handleOnDeleteBtn(finalDetail.id)}>
              <AiFillDelete />
            </ListenDelButton>
          </ButtonsDiv>
          <TitleBox>
            <TopTableTitle>회의명</TopTableTitle>
            <TitleDiv>{finalDetail.title}</TitleDiv>
          </TitleBox>
          <ScriptDiv>
            <TitleText>회의내용</TitleText>
            <Script>{finalDetail.detail}</Script>
          </ScriptDiv>
        </MainDiv>
      ) : (
        <MainForm>
          <TopTableDiv>
            <TopTableSub>
              <TopTableTitle>회의명</TopTableTitle>
              <TopTableInput onChange={(e) => setTitle(e.target.value)} />
            </TopTableSub>
            <TopTableSub>
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
        </MainForm>
      )}
    </>
  );
}

export default SpeechPage;
