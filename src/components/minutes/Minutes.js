import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import {
  BsFillMicFill,
  FaPencilAlt,
  BiStop,
  BiSave,
  VscDebugRestart,
  RiPlayList2Fill,
  AiOutlinePlusCircle,
  AiFillDelete,
  AiOutlineShareAlt,
  AiFillPrinter
} from "../../common/icons/index";

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
    setIsOpen(true);
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
            aria-label='go_to_add_minutes'
          >
            {isOpen ? <AiOutlinePlusCircle /> : <RiPlayList2Fill />}
          </S.AddButton>
        </S.HeaderRight>
      </S.Header>
      {isOpen ? (
        <S.MainDiv>
          <S.ButtonBox>
            {!isEdit ? (
              <S.Button onClick={() => setIsEdit(true)} aria-label='go_to_edit_minutes'>
                <FaPencilAlt />
              </S.Button>
            ) : (
              <S.Button onClick={() => handleEditButton(minutes.id)} aria-label='edit_minutes'>
                <BiSave />
              </S.Button>
            )}
            <S.Button onClick={() => handleCopyClipBoard(minutes.detail)} aria-label='copy_clip_board'>
              <AiOutlineShareAlt />
            </S.Button>
            <S.Button onClick={handlePrint} aria-label='print'>
              <AiFillPrinter />
            </S.Button>
            <S.Button
              onClick={() => handleOnDeleteMinutes(minutes.id)}
              aria-label='delete_minutes'
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
              aria-label='recoding'
            >
              <BsFillMicFill />
            </S.Button>
            <S.Button
              type='button'
              onClick={handleOnStopBtn}
              aria-label='stop_recoding'
            >
              <BiStop />
            </S.Button>
            <S.Button
              type='button'
              onClick={resetTranscript}
              aria-label='reset_recoding'
            >
              <VscDebugRestart />
            </S.Button>
            <S.Button onClick={handleSaveButton} aria-label='save_recoding'>
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
