// import React, { useState } from "react";
// import { Icon } from "@iconify/react";
// import { format, addMonths, subMonths } from "date-fns";

// const ReanderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
//   return (
//     <div className="header row">
//       <div className="col col-start">
//         <span className="text">
//           <span className="text month">{format(currentMonth, "M")}월</span>
//           {format(currentMonth, "yyyy")}
//         </span>
//       </div>
//       <div className="col col-end">
//         <Icon
//           icon="material-symbols:arrow-circle-left-outline-rounded"
//           onClick={prevMonth}
//         />
//         <Icon
//           icon="material-symbols:arrow-circle-right-outline-rounded"
//           onClick={nextMonth}
//         />
//       </div>
//     </div>
//   );
// };

// const Calendar = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectDate, setSelectDate] = useState(new Date());

//   const prevMonth = () => {
//     setCurrentMonth(subMonths(currentMonth, 1));
//   };
//   const nextMonth = () => {
//     setCurrentMonth(addMonths(currentMonth, 1));
//   };
//   return (
//     <div className="calendar">
//       <ReanderHeader
//         currentMonth={currentMonth}
//         prevMonth={prevMonth}
//         nextMonth={nextMonth}
//       />
//       <div className="header">Header</div>
//       <div className="days">Days</div>
//       <div className="body">Cells</div>
//     </div>
//   );
// };
// export default Calendar;
