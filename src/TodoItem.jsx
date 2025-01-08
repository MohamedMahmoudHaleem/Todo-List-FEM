import { useContext, useState } from "react";
import { MyToDoContext } from "./MyToDoContext.jsx";
function TodoItem({ index, todo }) {
  const { setTodos, IconCross } = useContext(MyToDoContext);
  const [checked, setChecked] = useState(false);

  function DeleteItem(DeletedIndex) {
    setTodos((prev) => prev.filter((_, index) => index != DeletedIndex));
  }
  function changeCheck() {
    setChecked((c) => !c);
  }

  return (
    <li
      className={`text-lg bg-neutral-light-veryLightGray rounded-md rounded-b-none w-full h-10 outline-none p-7 flex flex-row justify-between items-center
      `}
    >
      <div className="flex gap-6 items-center  text-neutral-light-veryDarkGrayishBlue ">
        <input
          // onClick={handleInputChange}
          type="checkbox"
          name=""
          className={`appearance-none w-4 h-4 border-[1px] border-neutral-light-primary rounded-full 
            checked:bg-gradient-to-br from-[#57DDFF] to-[#C058F3] peer
            ${
              checked ? `bg-gradient-to-br from-[#57DDFF] to-[#C058F3]` : " "
            } `}
        />
        <p
          onClick={changeCheck}
          className={`cursor-pointer peer-checked:line-through ${checked ? "line-through " : ""}`}
        >
          {todo}
        </p>
      </div>
      <div>
        <img
          src={IconCross}
          alt="icon"
          className="w-4 h-4 cursor-pointer"
          onClick={() => DeleteItem(index)}
        />
      </div>
    </li>
  );
}

export default TodoItem;
