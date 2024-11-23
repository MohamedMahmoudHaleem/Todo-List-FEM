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
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
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
    <div className="font-JosefinSans bg-neutral-light-veryLightGrayishBlue min-h-screen relative">
      <div
        className={`absolute top-0 left-0 w-full h-72 bg-no-repeat bg-cover ${
          darkMode
            ? "bg-dark-mode-bg md:bg-dark-mode-bg-desktop"
            : "bg-light-mode-bg md:bg-light-mode-bg-desktop"
        }`}
      ></div>
      <MyToDoContext.Provider
        value={{
          toggle: darkMode,
          setToggle: setDarkMode,
          IconCheck,
          IconCross,
          IconMoon,
          IconSun,
        }}
      >
        <Header />
        <NewTodo />
        <ToDoList />
      </MyToDoContext.Provider>
    </div>
  );
}

export default App;
