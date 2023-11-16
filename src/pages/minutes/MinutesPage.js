import { useEffect, useState, useCallback } from "react";

import Header from '../../common/Header';
import Minutes from "./../../components/minutes/Minutes";
import MinutesList from "./../../components/minutes/MinutesList";

import color from "./../../assets/color.png";

import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText
} from '../../styles/CommonStyles';

import {
  fetchAddMinutes,
  fetchDeleteMinutes,
  fetchEditMinutes,
  fetchMinutesList
} from '../../api/minutes';

import {
  useAddMinutes,
  useDeleteMinutes,
  useEditMinutes
} from '../../query-hooks/useMinutes';

const MinutesPage = () => {
  const userId = localStorage.getItem('userId');
  const [minutesList, setMinutesList] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [writeTitle, setWriteTitle] = useState("");
  const [refreshKey, setRefreshKey] = useState(false);

  const addMinutes = useAddMinutes();
  const editMinutes = useEditMinutes();
  const deleteMinutes = useDeleteMinutes();

  useEffect(() => {
    getMinutesList()
  }, [refreshKey]);

  const getMinutesList = async () => {
    try {
      const res = await fetchMinutesList(userId);

      setMinutesList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailMinutes = (minutesData) => {
    setMinutes(minutesData);
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setWriteTitle((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  /* 회의록 관리 */
  // 음성 녹음 저장
  const handleSave = async (detail) => {
    const data = {
      detail,
      title: writeTitle.writeTitle
    };

    try {
      await fetchAddMinutes(data, userId);

      alert("회의록이 저장되었습니다.");

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  // 회의록 수정
  const handleEdit = async (meetingI, editText) => {
    const data = {
      detail: editText,
    };

    try {
      await fetchEditMinutes(data, meetingI, userId);

      alert("회의록 수정 성공!");

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  // 회의록 삭제
  const handleOnDeleteMinutes = async (meetingId) => {
    try {
      await fetchDeleteMinutes(meetingId);

      alert("회의록 삭제완료");

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  // 회의내용 클립보드 복사
  const handleCopyClipBoard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("회의내용이 복사되었습니다.");
      })
      .catch((error) => {
        console.error("복사 실패:", error);
      });
  };

  return (
    <Container>
      <MainSection>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <TitleText>회의록</TitleText>
          <MinutesList
            minutesList={minutesList}
            handleDetailMinutes={handleDetailMinutes}
          />
        </LeftSection>
        <RightSection>
          <Minutes
            minutes={minutes}
            handleOnDeleteMinutes={handleOnDeleteMinutes}
            handleCopyClipBoard={handleCopyClipBoard}
            handleSave={handleSave}
            handleChange={handleChange}
            handleEdit={handleEdit}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default MinutesPage;
