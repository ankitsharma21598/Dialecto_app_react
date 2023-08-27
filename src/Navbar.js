import { useContext } from "react";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";
export const Navbar = () => {
  // get theme and lanauge contexts here
  const { language } = useContext(languageContext);
  const { theme,setTheme } = useContext(themeContext);

  function handleTheme(){
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={() => handleTheme()}>Change theme</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
