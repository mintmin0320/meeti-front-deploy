import React from 'react';
import styled from 'styled-components';

// Background_circle
const Circle_frame = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #8165df;
  opacity: 0;
  
  @keyframes wave {
    0% {
      scale: 100%;
      opacity: 0.8;
    };
    40% {
      opacity: 0.3;
    };
    100% {
      scale: 2000%;
      opacity: 0;
    };
  };
`;

const L_Circle_frame = styled(Circle_frame)`
  position: absolute;
  bottom: -25px;
  left: -25px;
`;

const R_Circle_frame = styled(Circle_frame)`
  position: absolute;
  top: -25px;
  right: -25px;
`;

const Circle1 = styled(L_Circle_frame)`
  animation: wave 4s infinite linear;
`;

const Circle2 = styled(L_Circle_frame)`
  animation: wave 4s infinite 2s linear;
`;

const Circle3 = styled(R_Circle_frame)`
  animation: wave 4s infinite linear;
`;

const Circle4 = styled(R_Circle_frame)`
  animation: wave 4s infinite 2s linear;
`;

function BackgroundCircle() {
  return (
    <div className="circle_frame" style={{ overflow: "hidden" }}>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
    </div>
  );
};

export default BackgroundCircle;
