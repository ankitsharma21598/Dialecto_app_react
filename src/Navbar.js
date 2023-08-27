import { useContext } from "react";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";
export const Navbar = () => {
  // get theme and lanauge contexts here
  const { language } = useContext(languageContext);
  const { theme,setTheme } = useContext(themeContext);

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={() => changeTheme()}>{theme === "light" ? "Dark" : "Light"} theme</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
