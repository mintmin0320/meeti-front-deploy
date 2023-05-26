import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// icon
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const Header = styled.div`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  z-index: 4;
`;


export default function Menubar() {
  return (
    <Header>
      <Link to="/">
        <AiOutlineCalendar className="true" />
      </Link>
      <Link to="/">
        <FaRegAddressBook className="false" />
      </Link>
      <Link to="/reservation">
        <RiMapPinLine className="false" />
      </Link>
      <Link to="/approval">
        <HiOutlineMail className="false" />
      </Link>
    </Header>
  )
}
