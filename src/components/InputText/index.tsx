import React from 'react';
import * as S from './styled';
import type * as T from './type';

function InputText({ onChange, onKeyDown, inputText }: T.InputTextProps) {
  return (
    <>
      <input
        type='text'
        className='inputText'
        placeholder='내용 입력'
        onChange={e => onChange(e)}
        onKeyDown={e => onKeyDown(e)}
        value={inputText}
      />
    </>
  );
}

export default InputText;
