import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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

// styles
import * as S from './styles/Minutes.style';


const SpeechPage = ({
  minutes,
  handleOnDeleteMinutes,
  handleChange,
  handleCopyClipBoard,
  handleSave,
  handleEdit,
}) => {
  const componentRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(minutes.detail || "");

  useEffect(() => {
    if (minutes.detail) {
      setEditText(minutes.detail);
    }
  }, [minutes.detail]);

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
  const handleSaveButton = (e) => {
    e.preventDefault();

    const detail = transcript;

    SpeechRecognition.stopListening();
    handleSave(detail);
    resetTranscript();
    isOpen(false);
  };

  // 회의록 수정
  const handleEditButton = (meetingId) => {
    setIsEdit(false);
    setEditText(minutes.detail);
    handleEdit(meetingId, editText);
  };

  return (
    <>
      <S.Header>
        <S.Header>
          <RiPlayList2Fill className="true" style={{ padding: "0" }} />
          <S.HeadTitle>Minutes</S.HeadTitle>
        </S.Header>
        <S.HeaderRight>
          <S.AddButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <AiOutlinePlusCircle /> : <RiPlayList2Fill />}
          </S.AddButton>
        </S.HeaderRight>
      </S.Header>
      {isOpen ? (
        <S.MainDiv>
          <S.ButtonBox>
            {!isEdit ? (
              <S.Button onClick={() => setIsEdit(true)}>
                <BsFillPencilFill />
              </S.Button>
            ) : (
              <S.Button onClick={() => handleEditButton(minutes.id)}>
                <BiSave />
              </S.Button>
            )}
            <S.Button onClick={() => handleCopyClipBoard(minutes.detail)}>
              <AiOutlineShareAlt />
            </S.Button>
            <S.Button onClick={handlePrint}>
              <AiFillPrinter />
            </S.Button>
            <S.Button
              onClick={() => handleOnDeleteMinutes(minutes.id)}
            >
              <AiFillDelete />
            </S.Button>
          </S.ButtonBox>
          <S.AddMinutesWrap ref={componentRef}>
            <S.MinutesInfoWrap>
              <S.MinutesInfoBox>
                <S.InfoTitleBox>문서번호</S.InfoTitleBox>
                <S.InfoDataBox>{minutes.id}</S.InfoDataBox>
              </S.MinutesInfoBox>
              <S.MinutesInfoBox>
                <S.InfoTitleBox>회의일자</S.InfoTitleBox>
                <S.InfoDataBox>{minutes.date}</S.InfoDataBox>
              </S.MinutesInfoBox>
              <S.MinutesInfoBox>
                <S.InfoTitleBox>작성자</S.InfoTitleBox>
                <S.InfoDataBox>{minutes.username}</S.InfoDataBox>
              </S.MinutesInfoBox>
            </S.MinutesInfoWrap>
            <S.MinutesTitleBox>
              <S.InfoTextBox>회의명</S.InfoTextBox>
              <S.TitleBox>{minutes.title}</S.TitleBox>
            </S.MinutesTitleBox>
            <S.TranscriptBox>
              <S.TextBox
                style={{ borderRadius: "8px 8px 0 0" }}
              >
                회의내용
              </S.TextBox>
              {!isEdit ? (
                <S.Transcript>{minutes.detail}</S.Transcript>
              ) : (
                <S.Textarea
                  name='editText'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              )}
            </S.TranscriptBox>
          </S.AddMinutesWrap>
        </S.MainDiv>
      ) : (
        <S.Form>
          <S.ButtonBox>
            <S.Button
              type='button'
              onClick={handleOnStartBtn}
            >
              <BsFillMicFill />
            </S.Button>
            <S.Button
              type='button'
              onClick={handleOnStopBtn}
            >
              <BiStop />
            </S.Button>
            <S.Button
              type='button'
              onClick={resetTranscript}
            >
              <VscDebugRestart />
            </S.Button>
            <S.Button onClick={handleSaveButton}>
              <BiSave />
            </S.Button>
          </S.ButtonBox>
          <S.AddMinutesWrap>
            <S.MicrophoneStatus>
              Microphone: {listening ? "🟢" : "🔴"}
            </S.MicrophoneStatus>
            <S.MinutesTitleBox>
              <S.InfoTextBox>회의명</S.InfoTextBox>
              <S.Input
                name='writeTitle'
                onChange={handleChange}
                required
              />
            </S.MinutesTitleBox>
            <S.TranscriptBox>
              <S.TextBox
                style={{ borderRadius: "8px 8px 0 0" }}
              >
                회의내용
              </S.TextBox>
              <S.Transcript>{transcript}</S.Transcript>
            </S.TranscriptBox>
          </S.AddMinutesWrap>
        </S.Form>
      )}
    </>
  );
};

export default SpeechPage;
