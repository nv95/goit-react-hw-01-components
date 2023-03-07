import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-top: 30px;
  width: 600px;
  border: 0.5px solid whitesmoke;
  border-collapse: collapse;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: rgb(227, 225, 225);
`;

export const THead = styled.thead`
  height: 40px;
  background-color: orange;
  font-size: 15px;
`;

export const Th = styled.th`
  border: 0.5px solid lightgray;
`;

export const Tr = styled.tr`
  color: white;
  height: 40px;
  border: 0.5px solid lightgray;
  font-weight: 600px;
  &:nth-child(even) {
    background-color: gainsboro;
  }
`;

export const Td = styled.td`
  color: #212121;
  padding: 10px 70px;
  width: 200px;
  border: 0.5px solid lightgray;
  font-weight: 500;
`;
