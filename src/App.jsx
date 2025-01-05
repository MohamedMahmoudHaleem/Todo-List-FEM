import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import NewTodo from "./NewTodo.jsx";
import ToDoList from "./ToDoList.jsx";
import { MyToDoContext } from "./MyToDoContext.jsx";
// import BgDesktopLight from './assets/images/bg-desktop-light.jpg'
// import BgDesktopDark from './assets/images/bg-desktop-dark.jpg';
// import BgMobileLight from './assets/images/bg-mobile-light.jpg'
// import BgMobileDark from './assets/images/bg-mobile-dark.jpg'
import IconCheck from "./assets/images/icon-check.svg";
import IconCross from "./assets/images/icon-cross.svg";
import IconMoon from "./assets/images/icon-moon.svg";
import IconSun from "./assets/images/icon-sun.svg";

function App() {
  //conditional state if the theme is dark return true .
  // const [darkMode, setDarkMode] = useState(
  //   () => localStorage.getItem("theme") === "dark"
  // );
  const [darkMode, setDarkMode] = useState(() => {
    // Get the initial theme from localStorage or system preference
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      // className={`font-JosefinSans min-h-screen relative bg-neutral-light-veryLightGray
      //    ${darkMode && "dark:bg-neutral-dark-veryDarkBlue"} `}
      className={`font-JosefinSans min-h-screen relative 
        transition-all delay-150 bg-neutral-light-veryLightGray 
          dark:bg-neutral-dark-veryDarkBlue `}
    >
      <div
        className={` w-full h-80 bg-no-repeat bg-cover absolute top-0 left-0 transition-all delay-150 bg-light-mode-bg md:bg-light-mode-bg-desktop dark:bg-dark-mode-bg dark:md:bg-dark-mode-bg-desktop`}
      ></div>
      {/* <div
        className={` w-full h-80 bg-no-repeat bg-cover absolute top-0 left-0 transition-all delay-150 ${
          darkMode
            ? "bg-dark-mode-bg md:bg-dark-mode-bg-desktop"
            : "bg-light-mode-bg md:bg-light-mode-bg-desktop"
        }`}
      ></div> */}
      <MyToDoContext.Provider
        value={{
          darkMode,
          setDarkMode,
          IconCheck,
          IconCross,
          IconMoon,
          IconSun,
        }}
      >
        <div className="continer relative mx-auto  pt-20  max-w-screen-[300px] md:max-w-screen-sm ">
          <Header />
          <NewTodo />
          <ToDoList />
        </div>
      </MyToDoContext.Provider>
    </div>
  );
}

export default App;
