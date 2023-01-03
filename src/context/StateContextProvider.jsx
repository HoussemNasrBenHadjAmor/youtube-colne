import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const hideShow = () => setOpen(!open);

  return (
    <StateContext.Provider
      value={{
        open,
        setOpen,
        hideShow,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
