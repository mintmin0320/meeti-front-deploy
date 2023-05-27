import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko"; // 날짜 포맷 라이브러리 (한국어 기능을 임포트)

const MiniCalendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };


  const setSchedule = (item) => {
    setState([item.selection]);
    if (item.selection.endDate !== null) {
      console.log(item.selection);
    }
  };


  // 작성완료버튼 css랑 위치 맞춰주고 아래 Input을 위에 인풋대신 사용 ㄱㄱ
  // 지금은 밖에 컴포넌트에 빼놨잖아 그러면 form 안 되니까 여기서 완성해줘
  // 정리하면 하나의 폼으로 제목이랑 일정 넘기게 이 틀대로 css짜서 형식 맞춰줘 위에 일정제목(지워줘) 지워줘
  // 콘솔창에 날짜 찍고 제목 적고 작성완료 버튼 누르면 뭔말인지 알거임 모르면 카톡 ㄱㄱ

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        onChange={(e) => handleOnChange(e)}
        placeholder='여기에 일정제목'
        required={true}
      />
      <DateRange
        locale={ko}
        editableDateInputs={true}
        onChange={(item) => setSchedule(item)}
        moveRangeOnFirstSelection={false}
        ranges={state}
        retainEndDateOnFirstSelection={true}
      />
      <button type='submit' onClick={() => console.log(state, title)}>작성완료버튼</button>
    </form>
  );
};
export default MiniCalendar;
