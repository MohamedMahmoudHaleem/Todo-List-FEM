import { useContext } from "react";
import { MyToDoContext } from "./MyToDoContext.jsx";

function Header() {
  const { darkMode, setDarkMode, IconMoon, IconSun } =
    useContext(MyToDoContext);
  console.log("🚀 ~ Header ~ darkMode:", darkMode);

  return (
    <div
      className="flex w-96  justify-between items-center
    "
    >
      <h1 className="text-neutral-light-veryLightGray text-5xl tracking-[10px]">
        {" "}
        Todo
      </h1>
      <div>
        <button onClick={() => setDarkMode(!darkMode)}>
          <img src={darkMode ? IconSun : IconMoon} alt="icon" />
        </button>
      </div>
    </div>
  );
}

export default Header;
