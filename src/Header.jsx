import { useContext } from "react";
import { MyToDoContext } from "./MyToDoContext.jsx";

function Header() {
  const { darkMode, setDarkMode, IconMoon, IconSun } =
    useContext(MyToDoContext);
  console.log("🚀 ~ Header ~ darkMode:", darkMode);

  return (
    <>
      <div
        className="flex  justify-between items-center 
    "
      >
        <h1 className="text-neutral-light-veryLightGray text-5xl tracking-[10px] ">
          {" "}
          Todo
        </h1>
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode ? IconSun : IconMoon} alt="icon" />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <label htmlFor="text">
          <input type="checkbox" name="" id="" />
          <input type="text" name="" id="" />
        </label>
      </div>
    </>
  );
}

export default Header;
