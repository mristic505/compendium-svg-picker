import React, { FC, FormEvent, useRef } from "react";

interface NewToDoProps {
  onAddToDo(text: string): void;
}

const NewToDo: FC<NewToDoProps> = ({ onAddToDo }) => {
  const TextInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = TextInputRef.current!.value;
    onAddToDo(enteredText);    
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={TextInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewToDo;
