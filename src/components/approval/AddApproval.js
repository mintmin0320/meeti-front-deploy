import React, { useRef, useState } from "react";
import styled from "styled-components";

// icons
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const TitleBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

const PageTitle = styled.p`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;

const InfoTitle = styled.p`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

const UserInfoBox = styled.div`
  width: 85%;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: solid 1px #bdbdbd;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const UserInfo = styled.button`
  width: 75px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border: solid 1px #bdbdbd;
  font-size: 14px;
  border-radius: 12px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

const FileUpdateBox = styled.div`
  width: 85%;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: solid 1px #bdbdbd;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const InputFileHidden = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0.5px solid #535571;
`;

const FileButton = styled.label`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  background: #f2f2f2;
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

const Textarea = styled.textarea`
  width: calc(85% - 4px);
  height: 80px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  outline: none;
  overflow-y: auto;
  font-size: 15px;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  width: 111px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  background: #8165df;
  color: #ffffff;
  margin-top: 20px;
  margin-left: 8px;
  cursor: pointer;
`;

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
      <TitleBox>
        <HiOutlineMail className="true" style={{ padding: "0" }} />
        <PageTitle>Approval</PageTitle>
      </TitleBox>
      <InfoTitle>결재자 선택</InfoTitle>
      <UserInfoBox>
        {adminList.map((item, index) => (
          <UserInfo
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
          </UserInfo>
        ))}
      </UserInfoBox>
      <InfoTitle>업로드 파일 선택</InfoTitle>
      <FileUpdateBox>
        <FileButton
          onClick={() => InputRef.current?.click()}
        >
          파일선택
        </FileButton>
        <InputFileHidden
          type='file'
          hidden={true}
          ref={InputRef}
          onChange={handleImgUpload}
        />
      </FileUpdateBox>
      <InfoTitle>기타</InfoTitle>
      <Textarea name='request' onChange={handleChange} />
      <SubmitButton>
        <FaRegPaperPlane style={{ color: "#ffffff", marginRight: "10px" }} />
        전송하기
      </SubmitButton>
    </form>
  );
};

export default AddApproval;
