import { useNavigate } from 'react-router-dom';
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko";

import BackgroundPalette from './BackgroundPalette';
import * as S from './styles/AddSchedule.style';

import {
  BiMinus,
  BiPlus,
  AiOutlineCalendar
} from "../../common/icons/index";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const AddSchedule = ({
  date,
  handleSubmit,
  handleChange,
  handleScheduleDate,
}) => {
  const navigator = useNavigate();

  return (
    <S.From onSubmit={handleSubmit}>
      <S.LeftBox>
        <S.TitleFont>날짜</S.TitleFont>
        <DateRange
          locale={ko}
          editableDateInputs={true}
          onChange={(item) => handleScheduleDate(item)}
          moveRangeOnFirstSelection={false}
          ranges={date}
          retainEndDateOnFirstSelection={true}
        />
      </S.LeftBox>
      <S.RightBox>
        <S.TitleFont>제목</S.TitleFont>
        <S.Title
          name='title'
          onChange={handleChange}
          required
        />
        <S.TitleFont>장소</S.TitleFont>
        <S.PlaceInput
          name='place'
          onChange={handleChange}
          required
        />
        <BackgroundPalette />
        <S.TitleFont>시간</S.TitleFont>
        <S.TimeBox>
          <S.Time
            type="time"
            name='initTime'
            onChange={handleChange}
            required
          />
          <BiMinus className="BiMinus" />
          <S.Time
            type="time"
            name='finishTime'
            onChange={handleChange}
            required
          />
        </S.TimeBox>
        <S.ButtonBox>
          <S.Button>
            <BiPlus style={{ color: "#ffffff", marginRight: "5px" }} />
            일정 추가
          </S.Button>
        </S.ButtonBox>
      </S.RightBox>
      <S.NavigatorButton
        type='button'
        onClick={() => {
          navigator('/');
        }}
        aria-label='go_to_calendar'
      >
        <AiOutlineCalendar size='20px' />
      </S.NavigatorButton>
    </S.From>
  );
};

export default AddSchedule;
