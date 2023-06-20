import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("dark_mode") === "true"
  );

  const [open, setOpen] = useState(true);
  const [countryCode, setCountryCode] = useState(null);

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

  const getGeroInfo = () => {
    axios
      .get("https://api.country.is/")
      .then(({ data }) => setCountryCode(data?.country?.toLowerCase()))
      .catch(() => setCountryCode("ca"));
  };

  const hideShow = () => setOpen(!open);

  useEffect(() => {
    getGeroInfo();
  }, [theme]);

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
        countryCode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
