import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// icons
import { FaRegAddressBook } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiMapPinLine, RiPlayList2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";

// styles
const HeaderWrap = styled.header`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  z-index: 1;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0;

  @media (max-width: 1440px) and (max-height: 800px) {
    margin: 5px 0;
  }

  &:hover span {
    display: block;
  }
`;

const TooltipText = styled.span`
  display: none;
  position: absolute;
  left: 18px;
  background-color: #8165df;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #555;
  }
`;

const Header = () => {
  const location = useLocation();

  const getIconClass = (path) => (
    location.pathname === path
      ? 'true'
      : 'false'
  );

  return (
    <HeaderWrap>
      <LinkContainer>
        <Link to="/">
          <AiOutlineCalendar
            className={getIconClass('/')}
            size='20px'
          />
          <TooltipText>일정관리</TooltipText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/contact">
          <FaRegAddressBook
            className={getIconClass('/contact')}
            size='20px'
          />
          <TooltipText>연락처</TooltipText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/reservation">
          <RiMapPinLine
            className={getIconClass('/reservation')}
            size='20px'
          />
          <TooltipText>오피스 예약</TooltipText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/approval">
          <HiOutlineMail
            className={getIconClass('/approval')}
            size='20px'
          />
          <TooltipText>결재 요청</TooltipText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/minutes">
          <RiPlayList2Fill
            className={getIconClass('/minutes')}
            size='20px'
          />
          <TooltipText>회의록</TooltipText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/profile">
          <BiUserCircle
            className={getIconClass('/profile')}
            size='20px'
          />
          <TooltipText>마이페이지</TooltipText>
        </Link>
      </LinkContainer>
    </HeaderWrap>
  );
}

export default Header;
