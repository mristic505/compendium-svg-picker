import { Todo } from "../todo.model";

interface ToDoListProps {
  items: Todo[];
  onDeleteToDo(id: string): void;
}
const ToDolist = ({ items, onDeleteToDo }: ToDoListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={onDeleteToDo.bind(null, item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDolist;
