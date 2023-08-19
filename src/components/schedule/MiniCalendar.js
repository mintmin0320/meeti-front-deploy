import React, { useState } from "react";

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

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        onChange={(e) => handleOnChange(e)}
        placeholder="여기에 일정제목"
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
      <button type="submit" onClick={() => console.log(state, title)}>
        작성완료버튼
      </button>
    </form>
  );
};

export default MiniCalendar;
