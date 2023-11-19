import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import {
  AiOutlinePlusCircle,
  BiSearch,
  RiMapPinLine
} from "../../common/icons/index";

import * as S from './styles/OfficeList.style';

const OfficeList = ({
  officeList,
  handleAreaButton,
  handleSearchOffice,
  handleChange,
}) => {
  const areaArr = ["전체", "중구", "동대문구", "용산구", "광진구", "마포구", "종로구", "강북구", "서초구", "양천구", "동작구", "구로구", "노원구", "중랑구", "영등포구", "관악구"];
  const navigator = useNavigate();

  const Classification = () => {
    return (
      <S.AreaClassification>
        {areaArr.map((item) =>
          <S.AreaButton
            key={item}
            onClick={() => handleAreaButton(item)}
          >
            {item}
          </S.AreaButton>
        )}
      </S.AreaClassification>
    );
  };

  const Card = () => {
    return (
      <S.OfficeListBox>
        {officeList.map((office) => (
          <S.OfficeItem key={office?.id}>
            <S.OfficeImgBox>
              <S.OfficeImg src={office?.image} alt="이미지 없음" />
            </S.OfficeImgBox>
            <S.OfficeInfoWrap>
              <S.OfficeInfoBox>
                <S.PlaceName>{office?.placeName}</S.PlaceName>
                <S.AreaName>{office?.address}</S.AreaName>
                <S.PayText>{office?.pay}원</S.PayText>
                {office?.status ? (
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
                  <S.TooltipButton>예약하기</S.TooltipButton>
                </Link>
                <S.TelNumTooltipButton
                  onClick={() => {
                    alert(`${office.telNum}`);
                  }}
                >
                  전화하기
                </S.TelNumTooltipButton>
              </S.TooltipBox>
            </S.OfficeInfoWrap>
          </S.OfficeItem>
        ))}
      </S.OfficeListBox>
    );
  };

  return (
    <>
      <S.MenuBox>
        <S.SearchWrap>
          <RiMapPinLine className="true" style={{ padding: "0" }} />
          <S.PageTitle>Reservation</S.PageTitle>
          <S.SearchBox>
            <S.SearchInput name="search" onChange={handleChange} />
            <S.SearchButton
              onClick={handleSearchOffice}>
              <BiSearch size='20px' />
            </S.SearchButton>
          </S.SearchBox>
        </S.SearchWrap>
        <S.AddButton
          onClick={() => {
            navigator('/reservation/add-office');
          }}
        >
          <AiOutlinePlusCircle size='20px' />
        </S.AddButton>
      </S.MenuBox>
      <Classification />
      <Card />
    </>
  );
};

export default OfficeList;
