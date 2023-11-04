
import { HiLocationMarker } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

import { ListWrap } from '../../styles/CommonStyles';
import * as S from './styles/ScheduleList.style';

const ScheduleList = ({
  scheduleList,
  handleDeleteSchedule,
}) => {
  return (
    <ListWrap>
      {scheduleList?.map((item) => (
        <S.ScheduleItem key={item.id}>
          <S.TimeBox>
            <S.IconColor />
            <S.Time>
              {item.initTime} ~ {item.finishTime}
            </S.Time>
          </S.TimeBox>
          <S.Title>{item.title}</S.Title>
          <S.BottomBox>
            <S.PlaceBox>
              <HiLocationMarker />
              {item.place}
            </S.PlaceBox>
            <S.DeleteButtonBox>
              <S.DeleteBtn
                onClick={() => handleDeleteSchedule(item.id)}
              >
                <AiFillDelete size='25px' />
              </S.DeleteBtn>
            </S.DeleteButtonBox>
          </S.BottomBox>
        </S.ScheduleItem>
      ))}
    </ListWrap>
  );
};

export default ScheduleList;
