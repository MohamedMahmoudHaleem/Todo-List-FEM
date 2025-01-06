import { useContext } from "react";
import { MyToDoContext } from "./MyToDoContext.jsx";

function Header() {
  const { darkMode, setDarkMode, IconMoon, IconSun } =
    useContext(MyToDoContext);
  console.log("🚀 ~ Header ~ darkMode:", darkMode);

  return (
    <>
      <div
        className="flex  justify-between items-center"
      >
        <h1 className="uppercase text-neutral-light-veryLightGray font-semibold
        //  text-5xl tracking-[14px] ">
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
        <label htmlFor="text" className='relative' >
          <input type="checkbox" name=""  className="absolute top-[50%] translate-y-[-50%] ml-4 appearance-none w-4 h-4 border-[1px] border-neutral-light-veryLightGrayishBlue rounded-full  
          checked:bg-gradient-to-br from-[#57DDFF] to-[#C058F3] 
         " />
          <input type="text" name="" className="bg-neutral-light-veryLightGray rounded-sm w-full h-10 outline-none p-7 pl-14" placeholder="Create a new todo ..."/>
        </label>
      </div>
    </>
  );
}

export default Header;
