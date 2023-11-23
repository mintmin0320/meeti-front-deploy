import styled from 'styled-components';

const Button = styled.button`
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 18px;
  color: #8165df;
  background-color: #f0ebfa;
  cursor: pointer;

  &:hover {
    color: #f0ebfa;
    background-color: #8165df;
  }
`;

const CustomButton = ({ onClick, ariaLabel, type = 'button', children }) => {
  return (
    <Button onClick={onClick} aria-label={ariaLabel} type={type}>
      {children}
    </Button>
  );
};

export default CustomButton
