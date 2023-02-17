import React from 'react';
import * as S from './styled';
import type * as T from './type';
import { BsTrash } from 'react-icons/bs/';

function DeleteButton({ onClick }: T.DeleteButtonProps) {
  return (
    <>
      <S.Container onClick={onClick}>
        <BsTrash />
      </S.Container>
    </>
  );
}

export default DeleteButton;
