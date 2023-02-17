import styled from 'styled-components';

export const InputText = styled.input`
  width: 100%;
  height: 50px;

  border: 0.1px solid black;
  font-size: 18px;
  text-align: center;

  box-sizing: border-box;
  position: absolute;
  bottom: 0;

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;
