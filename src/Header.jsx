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
        <h1 className="uppercase text-neutral-light-veryLightGray font-semibold
         text-5xl tracking-[14px] ">
          {" "}
          Todo
        </h1>
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode ? IconSun : IconMoon} alt="icon" className='w-7'  />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <label htmlFor="text" id>
          <input type="checkbox" name="" id="" />
          <input type="text" name="" id="" />
        </label>
      </div>
    </>
  );
}

export default Header;
