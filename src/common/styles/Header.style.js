import styled from 'styled-components';

export const HeaderWrap = styled.header`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  z-index: 1;
`;

export const LinkContainer = styled.div`
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

export const TooltipText = styled.span`
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