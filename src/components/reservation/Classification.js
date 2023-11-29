import * as S from './styles/Classification.style';

const Classification = ({ handleArea }) => {
  const areaArr = [
    "전체", "중구", "동대문구", "용산구", "광진구", "마포구", "종로구", "강북구", "서초구", "양천구", "동작구", "구로구", "노원구", "중랑구", "영등포구", "관악구"
  ];

  return (
    <S.AreaClassification>
      {areaArr.map((item) =>
        <S.AreaButton
          key={item}
          onClick={() => handleArea(item)}
        >
          {item}
        </S.AreaButton>
      )}
    </S.AreaClassification>
  );
};

export default Classification;