import React, { useRef, useState } from "react";

// icons
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// styles
import * as S from './styles/AddApproval.style';

const AddApproval = ({
  adminList,
  handleAdminName,
  handleImgUpload,
  handleSubmit,
  handleChange,
}) => {
  const InputRef = useRef(null);
  const [isSelected, setIsSelected] = useState(null);

  return (
    <form onSubmit={handleSubmit}>
      <S.TitleBox>
        <HiOutlineMail className="true" style={{ padding: "0" }} />
        <S.PageTitle>Approval</S.PageTitle>
      </S.TitleBox>
      <S.InfoText>결재자 선택</S.InfoText>
      <S.AdminInfoBox>
        {adminList.map((item, index) => (
          <S.AdminInfo
            key={item?.id}
            type='button'
            style={
              index === isSelected ? {
                backgroundColor: "#8165df", color: "#fff"
              } : {}
            }
            onClick={() => {
              handleAdminName(item?.username);
              setIsSelected(index);
            }}
          >
            {item?.username}
          </S.AdminInfo>
        ))}
      </S.AdminInfoBox>
      <S.InfoText>업로드 파일 선택</S.InfoText>
      <S.FileInputBox>
        <S.InputText
          onClick={() => InputRef.current?.click()}
        >
          파일선택
        </S.InputText>
        <S.FileInput
          type='file'
          hidden={true}
          ref={InputRef}
          onChange={handleImgUpload}
        />
      </S.FileInputBox>
      <S.InfoText>기타</S.InfoText>
      <S.RequestTextarea name='request' onChange={handleChange} />
      <S.SubmitButton>
        <FaRegPaperPlane style={{ color: "#ffffff", marginRight: "10px" }} />
        전송하기
      </S.SubmitButton>
    </form>
  );
};

export default AddApproval;
