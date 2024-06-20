import { createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.classList.remove(theme === "light" ? "dark" : "light");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
