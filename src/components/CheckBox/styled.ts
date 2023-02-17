import styled from 'styled-components';

export const mainContainer = styled.div`
  width: 25px;
  height: 25px;

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(0, 221, 0);
  }
`;

export const checkIcon = styled.div`
  position: absolute;
  font-size: 30px;
  color: rgb(0, 221, 0);
`;
