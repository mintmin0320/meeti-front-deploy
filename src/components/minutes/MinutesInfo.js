import * as S from './styles/MinutesInfo.style';

const MinutesInfo = ({
  minutes,
  isEdit,
  editText,
  setEditText,
  componentRef
}) => {
  return (
    <S.AddMinutesWrap ref={componentRef}>
      <S.MinutesInfoWrap>
        <S.MinutesInfoBox>
          <S.InfoTitleBox>문서번호</S.InfoTitleBox>
          <S.InfoDataBox>{minutes?.id}</S.InfoDataBox>
        </S.MinutesInfoBox>
        <S.MinutesInfoBox>
          <S.InfoTitleBox>회의일자</S.InfoTitleBox>
          <S.InfoDataBox>{minutes?.date}</S.InfoDataBox>
        </S.MinutesInfoBox>
        <S.MinutesInfoBox>
          <S.InfoTitleBox>작성자</S.InfoTitleBox>
          <S.InfoDataBox>{minutes?.username}</S.InfoDataBox>
        </S.MinutesInfoBox>
      </S.MinutesInfoWrap>
      <S.MinutesTitleBox>
        <S.InfoTextBox>회의명</S.InfoTextBox>
        <S.TitleBox>{minutes?.title}</S.TitleBox>
      </S.MinutesTitleBox>
      <S.TranscriptBox>
        <S.TextBox
          style={{ borderRadius: "8px 8px 0 0" }}
        >
          회의내용
        </S.TextBox>
        {!isEdit ? (
          <S.Transcript>{minutes?.detail}</S.Transcript>
        ) : (
          <S.Textarea
            name='editText'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        )}
      </S.TranscriptBox>
    </S.AddMinutesWrap>
  );
};

export default MinutesInfo