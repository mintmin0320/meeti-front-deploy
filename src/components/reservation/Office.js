import { Link } from "react-router-dom";

import * as S from './styles/Office.style';

const Office = ({ officeResults }) => {
  return (
    <S.OfficeListBox>
      {officeResults?.map((office) => (
        <S.OfficeItem key={office.id}>
          <S.OfficeImgBox>
            <S.OfficeImg src={office.image} alt='office image' />
          </S.OfficeImgBox>
          <S.OfficeInfoWrap>
            <S.OfficeInfoBox>
              <S.PlaceName>{office.placeName}</S.PlaceName>
              <S.AreaName>{office.address}</S.AreaName>
              <S.PayText>{office.pay}원</S.PayText>
              {office.status ? (
                <S.OfficeStatus style={{ color: 'green' }}>
                  🟢 대여가능
                </S.OfficeStatus>
              ) : (
                <S.OfficeStatus style={{ color: 'red' }}>
                  🔴 대여완료
                </S.OfficeStatus>
              )}
            </S.OfficeInfoBox>
            <S.TooltipBox>
              <Link
                to="/reservation/detail"
                state={{ officeId: office.id }}
                style={{ textDecoration: "none" }}
              >
                <S.TooltipButton aria-label='예약하기'>
                  예약하기
                </S.TooltipButton>
              </Link>
              <S.TelNumTooltipButton
                onClick={() => { alert(`${office.telNum}`) }}
                aria-label='전화번호'
              >
                전화번호
              </S.TelNumTooltipButton>
            </S.TooltipBox>
          </S.OfficeInfoWrap>
        </S.OfficeItem>
      ))}
    </S.OfficeListBox>
  );
};

export default Office;