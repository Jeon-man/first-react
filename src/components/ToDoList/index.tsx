import React, { useRef, useState } from 'react';
import type * as T from './type';
import TodoItem from '@components/TodoItem';
import InputText from '@components/InputText';

function ToDoList() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<T.TodoList[]>([]);

  const nextId = useRef(4);

  function isCheck(id: number) {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  function isDelete(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  function inputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      const newTodo: T.TodoList = {
        id: nextId.current,
        text: inputText,
        completed: false,
      };
      setTasks(tasks.concat(newTodo));
      setInputText('');
      nextId.current += 1;
    }
  }

  return (
    <>
      <div>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onClickCheckBox={isCheck}
            onClickDeleteButton={isDelete}
          />
        ))}
      </div>
      <div>
        <InputText onChange={inputChange} onKeyDown={inputKeyDown} inputText={inputText} />
      </div>
    </>
  );
}

export default ToDoList;
