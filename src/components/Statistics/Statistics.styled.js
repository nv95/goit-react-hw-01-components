import styled from 'styled-components';

export const Stat = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  background-color: white;
  width: 270px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;
`;
export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const List = styled.ul`
  border-radius: inherit;
  display: flex;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid rgb(233, 223, 233);
  border-top: 2px solid rgb(233, 223, 233);
  border-bottom: 0.1px solid rgb(233, 223, 233);
  flex-grow: 1;
  color: white;
  font-size: 20px;
  background-color: ${props => {
    return getRandomHexColor();
  }};

  :nth-last-of-type(1) {
    border-right: none;
  }
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
