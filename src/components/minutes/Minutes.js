import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";

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

// apis
import {
  fetchAddMinutes,
  fetchDeleteMinutes,
  fetchEditMinutes,
} from "../../api/minutes";

// styles
const TopTableDiv = styled.div`
  margin: 20px;
  display: flex;
  height: 8%;
  font-size: 0.7rem;
  width: 90%;
`;

const TopTableSub = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  border: 0.05rem solid gray;
  margin: 0.3rem;
`;

const TitleBox = styled.div`
  width: 90%;
  font-size: 1rem;
  display: flex;
  height: 8%;
  border: 0.05rem solid gray;
  margin: 0.3rem;
`;

const TitleDiv = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const TopTableTitle = styled.div`
  width: 33%;
  border-right: 1px solid #6d6272;
  text-align: center;
  background-color: #f0ebfa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
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

const MinutesDataWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

const ButtonWrap = styled.div`
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

const TextDiv = styled.div`
  font-size: 12px;
`;

const TitleText = styled.span`
  width: 13%;
  padding: 5px;
  font-size: 1rem;
  border-right: 1px solid #6d6272;
  background-color: #f0ebfa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScriptDiv = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: row;
  background: #fff;
  font-size: 14px;
  border: 0.05rem solid gray;
  margin: 0.3rem;
`;

const Script = styled.div`
  width: 100%;
  font-size: 18px;
  overflow-y: scroll;
  padding: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScriptTextarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  padding: 4px;
`;

const SpeechPage = ({ detail = {} }) => {
  const componentRef = useRef();
  const userId = localStorage.getItem("userId");
  const [isOpen, setIsOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const defaultDetail = {
    id: "",
    date: "",
    username: "",
    title: "",
    detail: "",
  };

  const detailProps = { ...defaultDetail, ...detail };
  const [writeTitle, setWriteTitle] = useState(" ");
  const [minutesBody, setMinutesBody] = useState(detail?.detail || " ");

  useEffect(() => {
    // setMinutesBody(detail?.detail || " ");
  }, [detail]);

  // 회의록 프린트
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // 브라우저 설정 확인
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // 음성 녹음 시작
  const handleOnStartBtn = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "ko",
    });
  };

  // 음성 녹음 중지
  const handleOnStopBtn = () => {
    SpeechRecognition.stopListening();
  };

  // 음성 녹음 저장
  const handleOnSaveBtn = async () => {
    SpeechRecognition.stopListening();
    try {
      const data = {
        title: writeTitle,
        detail: transcript,
      };

      await fetchAddMinutes(data, userId);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    resetTranscript();
  };

  // 회의록 수정
  const handleOnEditBtn = async (meetingId) => {
    setIsEdit(false);

    try {
      const data = {
        detail: minutesBody,
      };

      await fetchEditMinutes(data, meetingId, userId);

      alert("회의록 수정 성공!");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // 회의내용 클립보드 복사
  const handleCopyClipBoard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("텍스트가 복사되었습니다.");
      })
      .catch((error) => {
        console.error("복사 실패:", error);
      });
  };

  // 회의록 삭제
  const handleOnDeleteBtn = async (meetingId) => {
    try {
      await fetchDeleteMinutes(meetingId);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    alert("회의록 삭제완료");
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
          <ButtonWrap>
            {!isEdit ? (
              <ListenButton onClick={() => setIsEdit(true)}>
                <BsFillPencilFill />
              </ListenButton>
            ) : (
              <ListenButton onClick={() => handleOnEditBtn(detailProps.id)}>
                <BiSave />
              </ListenButton>
            )}
            <ListenButton onClick={() => handleCopyClipBoard(minutesBody)}>
              <AiOutlineShareAlt />
            </ListenButton>
            <ListenButton onClick={handlePrint}>
              <AiFillPrinter />
            </ListenButton>
            <ListenDelButton onClick={() => handleOnDeleteBtn(detailProps.id)}>
              <AiFillDelete />
            </ListenDelButton>
          </ButtonWrap>
          <MinutesDataWrap ref={componentRef}>
            <TopTableDiv>
              <TopTableSub>
                <TopTableTitle>문서번호</TopTableTitle>
                <TopTableContacts>{detailProps.id}</TopTableContacts>
              </TopTableSub>
              <TopTableSub>
                <TopTableTitle>회의일자</TopTableTitle>
                <TopTableContacts>{detailProps.date}</TopTableContacts>
              </TopTableSub>
              <TopTableSub>
                <TopTableTitle>작성자</TopTableTitle>
                <TopTableContacts>{detailProps.username}</TopTableContacts>
              </TopTableSub>
            </TopTableDiv>
            <TitleBox>
              <TopTableTitle>회의명</TopTableTitle>
              <TitleDiv>{detailProps.title}</TitleDiv>
            </TitleBox>
            <ScriptDiv>
              <TitleText>회의내용</TitleText>
              {!isEdit ? (
                <Script>{detailProps.detail}</Script>
              ) : (
                <ScriptTextarea
                  type="text"
                  value={minutesBody}
                  onChange={(e) => setMinutesBody(e.target.value)}
                />
              )}
            </ScriptDiv>
          </MinutesDataWrap>
        </MainDiv>
      ) : (
        <MainForm>
          <ButtonWrap>
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
          </ButtonWrap>
          <MinutesDataWrap>
            <TextDiv>Microphone: {listening ? "🟢" : "🔴"}</TextDiv>
            <TopTableDiv>
              <TopTableSub>
                <TopTableTitle>회의명</TopTableTitle>
                <TopTableInput
                  onChange={(e) => setWriteTitle(e.target.value)}
                  value={writeTitle}
                />
              </TopTableSub>
              <TopTableSub>
                <TopTableTitle>작성자</TopTableTitle>
                <TopTableInput />
              </TopTableSub>
            </TopTableDiv>
            <ScriptDiv>
              <TitleText>회의내용</TitleText>
              <Script>{transcript}</Script>
            </ScriptDiv>
          </MinutesDataWrap>
        </MainForm>
      )}
    </>
  );
};

export default SpeechPage;
