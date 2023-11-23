import { useState, useRef } from "react";
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

import {
  useDeleteMinutes,
  useEditMinutes,
  useSaveMinutes
} from '../../query-hooks/useMinutes';

import MinutesInfo from './MinutesInfo';
import CustomButton from '../../common/CustomButton';

const SpeechPage = ({
  minutes,
  setMinutes,
}) => {
  const userId = localStorage.getItem('userId');

  const [isRecognition, setIsRecognition] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState();
  const [title, setTitle] = useState("");

  const componentRef = useRef();
  const { saveMinutes } = useSaveMinutes();
  const { handleDelete } = useDeleteMinutes();
  const { postEdit } = useEditMinutes();

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

  // 회의내용 클립보드 복사
  const handleCopyClipBoard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("회의내용이 복사되었습니다.");
      })
      .catch(() => {
        alert("복사 실패 중 오류가 발생했습니다.");
      });
  };

  // 음성 녹음 시작
  const handleStartRecognition = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "ko",
    });
  };

  // 음성 녹음 중지
  const handleStopRecognition = () => {
    SpeechRecognition.stopListening();
  };

  // 음성 녹음 저장
  const handleSave = async (e) => {
    e.preventDefault();

    const params = {
      detail: transcript,
      title
    };

    SpeechRecognition.stopListening();

    await saveMinutes({ userId, params });

    resetTranscript();
    setIsRecognition(false);
  };

  // 회의록 수정 시작
  const handleEditStart = () => {
    setIsEdit(true);
    setEditText(minutes.detail);
  };

  // 회의록 수정 저장
  const handleEdit = async (meetingId) => {
    setIsEdit(false);

    const params = {
      detail: editText,
    };

    await postEdit({ userId, meetingId, params });

    setMinutes({});
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
            onClick={() => setIsRecognition(!isRecognition)}
            aria-label='메뉴 변경'
          >
            {isRecognition ? <AiOutlinePlusCircle /> : <RiPlayList2Fill />}
          </S.AddButton>
        </S.HeaderRight>
      </S.Header>
      {!isRecognition ? (
        <S.MainDiv>
          <S.ButtonBox>
            {!isEdit ? (
              <CustomButton
                onClick={handleEditStart}
                ariaLabel='회의록 수정'>
                <FaPencilAlt />
              </CustomButton>
            ) : (
              <CustomButton
                onClick={() => handleEdit(minutes.id)}
                aria-label='수정 내용 저장'
              >
                <BiSave />
              </CustomButton>
            )}
            <CustomButton
              onClick={() => handleCopyClipBoard(minutes.detail)}
              aria-label='회의 내용 클립보드 복사'
            >
              <AiOutlineShareAlt />
            </CustomButton>
            <CustomButton
              onClick={handlePrint}
              aria-label='회의록 프린트'
            >
              <AiFillPrinter />
            </CustomButton>
            <CustomButton
              onClick={() => {
                handleDelete(minutes.id);
                setMinutes({});
              }}
              aria-label='회의록 삭제'
            >
              <AiFillDelete />
            </CustomButton>
          </S.ButtonBox>
          <MinutesInfo
            minutes={minutes}
            isEdit={isEdit}
            editText={editText}
            setEditText={setEditText}
            componentRef={componentRef}
          />
        </S.MainDiv>
      ) : (
        <S.Form>
          <S.ButtonBox>
            <CustomButton
              type='button'
              onClick={handleStartRecognition}
              aria-label='녹음 시작'
            >
              <BsFillMicFill />
            </CustomButton>
            <CustomButton
              type='button'
              onClick={handleStopRecognition}
              aria-label='녹음 중지'
            >
              <BiStop />
            </CustomButton>
            <CustomButton
              type='button'
              onClick={resetTranscript}
              aria-label='녹음 초기화'
            >
              <VscDebugRestart />
            </CustomButton>
            <CustomButton
              type='submit'
              onClick={handleSave}
              aria-label='녹음 저장'
            >
              <BiSave />
            </CustomButton>
          </S.ButtonBox>
          <S.AddMinutesWrap>
            <S.MicrophoneStatus>
              Microphone: {listening ? "🟢" : "🔴"}
            </S.MicrophoneStatus>
            <S.MinutesTitleBox>
              <S.InfoText>회의명</S.InfoText>
              <S.Input
                name='title'
                onChange={(e) => setTitle(e.target.value)}
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

export default SpeechPage
