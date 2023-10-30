import React, { useState } from "react";
import ToDolist from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { Todo } from "./todo.model";
import SVGComponent from "./components/Fem";


const Title = (): JSX.Element => {
  return <h1>To-do List</h1>
}

const App: React.FC = () => {
  const [toDos, setToDos] = useState<Todo[]>([]);
  const toDoAddHandler = (text: string) => {
    setToDos((prevToDos) => [...prevToDos, { id: Math.random().toString(), text }]);    
  };
  const toDoDeleteHandler = (id: string) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };
  return (
    <div className="App">
      <Title />
      <NewToDo onAddToDo={toDoAddHandler} />
      <ToDolist onDeleteToDo={toDoDeleteHandler} items={toDos} />
      <SVGComponent />
    </div>
  );
};

export default App;
