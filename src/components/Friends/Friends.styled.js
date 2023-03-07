import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  margin-top: 30px;
  width: 270px;
  background-color: white;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: raw;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: white;
  width: 250px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;
`;
export const Status = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.children) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
