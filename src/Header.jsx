import { useContext } from "react";
import { MyToDoContext } from "./MyToDoContext.jsx";

function Header() {
  const { darkMode, setDarkMode } = useContext(MyToDoContext);

  return (
    <div>
      <h1 className="font-JosefinSans">Todo list </h1>
    </div>
  );
}

export default Header;
