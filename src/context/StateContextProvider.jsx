import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("dark_mode") === "true"
  );

  const [open, setOpen] = useState(true);

  const toggleMode = () => {
    if (theme) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark_mode", "false");
      setTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark_mode", "true");
      setTheme(true);
    }
  };

  const hideShow = () => setOpen(!open);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark_mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark_mode", "false");
    }
  }, [theme]);

  return (
    <StateContext.Provider
      value={{
        open,
        setOpen,
        hideShow,
        toggleMode,
        theme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
