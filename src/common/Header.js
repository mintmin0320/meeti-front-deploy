/*
  useLocation을 이용해 현재 경로와 비교 후 true false 결정
*/

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// icon
import { FaRegAddressBook } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiMapPinLine, RiPlayList2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";

// CSS 
const HeaderWrap = styled.header`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  z-index: 1;
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
      <Link to="/">
        <AiOutlineCalendar className={getIconClass('/')} />
      </Link>
      <Link to="/contact">
        <FaRegAddressBook className={getIconClass('/contact')} />
      </Link>
      <Link to="/reservation">
        <RiMapPinLine className={getIconClass('/reservation')} />
      </Link>
      <Link to="/approval">
        <HiOutlineMail className={getIconClass('/approval')} />
      </Link>
      <Link to="/minutes">
        <RiPlayList2Fill className={getIconClass('/minutes')} />
      </Link>
      <Link to="/profile">
        <BiUserCircle className={getIconClass('/profile')} />
      </Link>
    </HeaderWrap>
  );
}

export default Header;
