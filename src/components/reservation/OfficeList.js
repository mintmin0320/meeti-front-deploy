import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  AiOutlinePlusCircle,
  BiSearch,
  RiMapPinLine
} from "../../common/icons/index";

import * as S from './styles/OfficeList.style';

import {
  fetchClassificationArea,
  fetchOffice,
  fetchSearchOffice
} from '../../query-hooks/useReservation';

import Classification from './Classification';
import Office from './Office';

const OfficeList = () => {
  const navigator = useNavigate();

  const [keyword, setKeyword] = useState('');
  const [address, setAddress] = useState('');
  const [officeResults, setOfficeResults] = useState([]);

  // 기본 오피스 리스트
  const { data: officeList } = useQuery(fetchOffice());

  // 검색 결과
  const { data: searchResults, refetch: refetchSearchResults } = useQuery(
    fetchSearchOffice(keyword),
  );

  // 지역별 분류 결과
  const { data: classificationResults, refetch: refetchClassificationResults } = useQuery(
    fetchClassificationArea(address),
  );

  // 검색 또는 지역 분류 결과에 따라 결과 설정
  useEffect(() => {
    if (keyword && searchResults) {
      setOfficeResults(searchResults);
    } else if (address && classificationResults) {
      setOfficeResults(classificationResults);
    } else if (!address) {
      setOfficeResults(officeList);
    }
  }, [searchResults, classificationResults, officeList, keyword, address]);

  // 검색 핸들러
  const handleSearch = () => {
    if (keyword.trim() === '') {
      alert('검색어를 입력해주세요.');
      return;
    }

    refetchSearchResults();
  };

  const handleArea = (area) => {
    setKeyword('');

    if (area === '전체') {
      setOfficeResults(officeList || []);
      setAddress('');
    } else {
      setAddress(area);

      refetchClassificationResults();
    }
  };

  return (
    <>
      <S.MenuBox>
        <S.SearchWrap>
          <RiMapPinLine className="true" style={{ padding: "0" }} />
          <S.PageTitle>Reservation</S.PageTitle>
          <S.SearchBox>
            <S.SearchInput
              name="keyword"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <S.SearchButton
              onClick={handleSearch}
              aria-label='오피스 검색'
            >
              <BiSearch size='20px' />
            </S.SearchButton>
          </S.SearchBox>
        </S.SearchWrap>
        <S.AddButton
          onClick={() => {
            navigator('/reservation/add-office');
          }}
          aria-label='오피스 등록하기'
        >
          <AiOutlinePlusCircle size='20px' />
        </S.AddButton>
      </S.MenuBox>
      <Classification handleArea={handleArea} />
      <Office officeResults={officeResults} />
    </>
  );
};

export default OfficeList;
