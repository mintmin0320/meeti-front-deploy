import { Link, useLocation } from 'react-router-dom';

import {
  FaRegAddressBook,
  AiOutlineCalendar,
  RiMapPinLine,
  RiPlayList2Fill,
  HiOutlineMail,
  BiUserCircle
} from "../common/icons/index";
import * as S from './styles/Header.style';

const Header = () => {
  const location = useLocation();

  const getIconClass = (path) => (
    location.pathname === path
      ? 'true'
      : 'false'
  );

  return (
    <S.HeaderWrap>
      <S.LinkContainer>
        <Link to="/">
          <AiOutlineCalendar
            className={getIconClass('/')}
            size='20px'
          />
          <S.TooltipText>일정관리</S.TooltipText>
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link to="/contact">
          <FaRegAddressBook
            className={getIconClass('/contact')}
            size='20px'
          />
          <S.TooltipText>연락처</S.TooltipText>
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link to="/reservation">
          <RiMapPinLine
            className={getIconClass('/reservation')}
            size='20px'
          />
          <S.TooltipText>오피스 예약</S.TooltipText>
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link to="/approval">
          <HiOutlineMail
            className={getIconClass('/approval')}
            size='20px'
          />
          <S.TooltipText>결재 요청</S.TooltipText>
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link to="/minutes">
          <RiPlayList2Fill
            className={getIconClass('/minutes')}
            size='20px'
          />
          <S.TooltipText>회의록</S.TooltipText>
        </Link>
      </S.LinkContainer>
      <S.LinkContainer>
        <Link to="/profile">
          <BiUserCircle
            className={getIconClass('/profile')}
            size='20px'
          />
          <S.TooltipText>마이페이지</S.TooltipText>
        </Link>
      </S.LinkContainer>
    </S.HeaderWrap>
  );
}

export default Header;
