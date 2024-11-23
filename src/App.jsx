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
    <div className="font-JosefinSans bg-neutral-light-veryLightGray min-h-screen relative">
      <div
        className={` w-full h-80 bg-no-repeat bg-cover ${
          darkMode
            ? "bg-dark-mode-bg md:bg-dark-mode-bg-desktop"
            : "bg-light-mode-bg md:bg-light-mode-bg-desktop"
        }`}
      ></div>
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
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Header />
          <NewTodo />
          <ToDoList />
        </div>
      </MyToDoContext.Provider>
    </div>
  );
}

export default App;
