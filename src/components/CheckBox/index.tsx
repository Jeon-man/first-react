import React from 'react';
import * as S from './styled';
import type * as T from './type';

function CheckBox({ checked, onClick }: T.CheckBoxProps) {
  return (
    <>
      <S.mainContainer onClick={onClick}>
        <S.checkIcon>{checked && '✔︎'}</S.checkIcon>
      </S.mainContainer>
    </>
  );
}

export default CheckBox;
