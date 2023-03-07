import styled from 'styled-components';

export const UserCard = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 40px;
  background-color: white;
  width: 270px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0;
  background-color: rgb(227, 225, 225);
`;
export const Name = styled.p`
  margin-top: 30px;
  margin-bottom: 0;
  font-size: 20px;
`;
export const Tag = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 15px;
  opacity: 0.5;
`;
export const Location = styled.p`
  margin-top: 10px;
  opacity: 0.5;
  font-size: 15px;
`;
export const Stats = styled.ul`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 2px 5px lightgrey;
  margin-top: 10px;
`;
export const Label = styled.span`
  font-size: 16px;
  color: grey;
  margin: 0;
`;

export const Quantity = styled.span`
  font-size: 20px;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-right: 2px solid rgb(233, 223, 233);
  border-top: 2px solid rgb(233, 223, 233);
  background-color: rgb(233, 233, 233);
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  :nth-last-of-type(1) {
    border-right: none;
  }
`;
