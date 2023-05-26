import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <AiOutlineCalendar />
      </Link>
      <Link to="/">
        <FaRegAddressBook />
      </Link>
      <Link to="/reservation">
        <RiMapPinLine />
      </Link>
      <Link to="/approval">
        <HiOutlineMail />
      </Link>
    </Header>
  );
}
