import { useContext } from "react";
import { MyToDoContext } from "./MyToDoContext.jsx";
import TodoItem from "./TodoItem.jsx";
function TodoList() {
  const { todos } = useContext(MyToDoContext);

  return (
    <div>
      {
        <ul className="flex flex-col divide-y-2 divide-neutral-light-lightGrayishBlue ">
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} />
          ))}
        </ul>
      }
    </div>
  );
}
export default TodoList;
