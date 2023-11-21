import { HiLocationMarker, AiFillDelete } from "../../common/icons/index";

import { ListWrap } from '../../styles/CommonStyles';
import * as S from './styles/ScheduleList.style';

import { useDeleteSchedule } from '../../query-hooks/useSchedule';

const ScheduleList = ({ scheduleList }) => {
  const { handleDeleteSchedule } = useDeleteSchedule();

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
                aria-label='delete_schedule'
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
