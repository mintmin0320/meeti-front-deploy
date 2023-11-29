import styled from 'styled-components';

// 오피스 리스트
export const OfficeListBox = styled.div`
  width: 100%;
  height: calc(100% - 180px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const OfficeItem = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  margin: 10px;  
  border-bottom: solid 1px #E6E6E6;
`;

export const OfficeImgBox = styled.div`
  width: 25%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 오피스 이미지
export const OfficeImg = styled.img`
  width: 140px;
  height: 80px;
`;

export const OfficeInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OfficeInfoBox = styled.div`
  width: 75%;
  height: 95%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

export const PlaceName = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #535571;
  font-size: 14px;
`;

export const AreaName = styled.p`
  width: 100px;
  height: 15px;
  font-size: 13px;
  font-weight: 700;
  color: #8165df;
  background: #f8f8f8;
`;

export const PayText = styled.p`
  color: #535571;
  font-size: 13px;
  &::before {
    content: "💰";
  }
  margin: 3px;
`;

export const OfficeStatus = styled.div`
  color: red;
  font-size: 12px;
`;

// 아이템 좌측 버튼 box
export const TooltipBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TooltipButton = styled.button`
  width: 65px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 5px;
  font-size: 12px;
  background: #8165df;
  cursor: pointer;
  `;

export const TelNumTooltipButton = styled.button`
  width: 65px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #535571;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 12px;
  margin: 5px;
  background: #ffffff;
  cursor: pointer;
`;