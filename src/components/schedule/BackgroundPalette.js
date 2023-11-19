import { useState } from "react";

import { useColor } from "../../hooks/context/BackContext";

import { FaSortDown } from "../../common/icons/index";

import * as S from './styles/BackgroundPalette.style';

const BackgroundPalette = () => {
  const { setColor } = useColor();
  const [colorDiv, setColorDiv] = useState(false);
  const [colorState, setColorState] = useState("#8165df");

  const onClickColor = (e) => {
    setColor(e.target.id);
  };

  return (
    <>
      <S.ColorPick
        color={colorState}
        onClick={() => {
          setColorDiv(!colorDiv);
        }}
      >
        <S.ColorText />
        <S.ColorText>컬러</S.ColorText>
        <FaSortDown style={{ color: "white" }} />
      </S.ColorPick>
      <S.ColorsDiv>
        <S.Color id="#ef888b" color1 onClick={onClickColor} />
        <S.Color id="#f1a175" color2 onClick={onClickColor} />
        <S.Color id="#f6c77a" color3 onClick={onClickColor} />
        <S.Color id="#bedb84" color4 onClick={onClickColor} />
        <S.Color id="#81c7ba" color5 onClick={onClickColor} />
        <S.Color id="#9ad8dd" color6 onClick={onClickColor} />
        <S.Color id="#a4c8e8" color7 onClick={onClickColor} />
        <S.Color id="#548ff7" color8 onClick={onClickColor} />
        <S.Color id="#de9fd6" color9 onClick={onClickColor} />
        <S.Color id="#8165df" color10 onClick={onClickColor} />
        <S.Color id="#df84a7" color11 onClick={onClickColor} />
        <S.Color id="#535571" color12 onClick={onClickColor} />
      </S.ColorsDiv>
    </>
  );
};

export default BackgroundPalette;
