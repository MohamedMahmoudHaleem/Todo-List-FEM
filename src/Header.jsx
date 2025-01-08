import { useContext, useRef, useState } from "react";
import { MyToDoContext } from "./MyToDoContext.jsx";

function Header() {
  const { darkMode, setDarkMode, IconMoon, IconSun, todos, setTodos } =
    useContext(MyToDoContext);

  const inputRef = useRef(null);

  function handleAddTodo() {
    const task = inputRef.current.value.trim();
    if (!task) return;
    setTodos((prev) => [...prev, task]);
    inputRef.current.value = "";
  }
  function EnterInputData(e) {
    if (e.key === "Enter") handleAddTodo();
  }

  return (
    <>
      <div className="flex  justify-between items-center">
        <h1
          className="uppercase text-neutral-light-veryLightGray font-semibold
          text-5xl tracking-[14px] "
        >
          {" "}
          Todo
        </h1>
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>
            <img
              src={darkMode ? IconSun : IconMoon}
              alt="icon"
              className="w-7"
            />
          </button>
        </div>
      </div>
      <div className="mt-10 mb-2">
        <label htmlFor="text" className="relative">
          <input
            onClick={() => handleAddTodo}
            type="checkbox"
            name=""
            className={`absolute top-[50%] translate-y-[-50%] ml-4 appearance-none w-4 h-4 border-[1px] border-neutral-light-veryLightGrayishBlue rounded-full 
              checked:bg-gradient-to-br from-[#57DDFF] to-[#C058F3]`}
          />
          <input
            ref={inputRef}
            onKeyDown={(e) => EnterInputData(e)}
            type="text"
            name=""
            className="bg-neutral-light-veryLightGray rounded-md w-full h-10 outline-none p-7 pl-14 "
            placeholder="Create a new todo ..."
          />
        </label>
      </div>
      {/* <NewTodo /> */}
    </>
  );
}

export default Header;
