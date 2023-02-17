import React from 'react';
import './text.css';

interface TextProps {
  completed?: boolean;
  children?: React.ReactNode;
}
//TODO: props로 ts-css에서 클래스 추가하는 법 찾아보기
function Text({ completed, children }: TextProps) {
  return (
    <>
      <div className={`text ${completed ? 'completedText' : ''}`}>{children}</div>
    </>
  );
}

export default Text;
