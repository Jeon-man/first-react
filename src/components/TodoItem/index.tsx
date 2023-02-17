import React from 'react';
import * as S from './styled';
import type * as T from './type';
import CheckBox from '@components/CheckBox';
import Text from '@components/Text';
import DeleteButton from '@components/DeleteButton';

const TodoItem = ({ onClickCheckBox, onClickDeleteButton, completed, text, id }: T.ItemProps) => {
  return (
    <>
      <S.container>
        <CheckBox checked={completed} onClick={() => onClickCheckBox(id)} />
        <Text completed={completed}>{text}</Text>
        <DeleteButton onClick={() => onClickDeleteButton(id)} />
      </S.container>
    </>
  );
};

export default TodoItem;
