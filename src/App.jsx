import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import NewTodo from "./NewTodo.jsx";
import ToDoList from "./ToDoList.jsx";
import { MyToDoContext } from "./MyToDoContext.jsx";
import IconCheck from "./assets/images/icon-check.svg";
import IconCross from "./assets/images/icon-cross.svg";
import IconMoon from "./assets/images/icon-moon.svg";
import IconSun from "./assets/images/icon-sun.svg";

function App() {
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
    <div className="font-JosefinSans bg-ne">
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
