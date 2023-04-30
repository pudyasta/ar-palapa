import React, { useContext, useReducer } from "react";

const ArContext = React.createContext();
const ArActionContext = React.createContext();
const reducer = (state, action) => {
  switch (action) {
    case "scanned":
      return { isScanning: false };
    default:
      return { isScanning: true };
  }
};

export const useAr = () => {
  return useContext(ArContext);
};
export const useDispatch = () => {
  return useContext(ArActionContext);
};

const ArProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isScanning: true });
  return (
    <ArContext.Provider value={state}>
      <ArActionContext.Provider value={dispatch}>
        {children}
      </ArActionContext.Provider>
    </ArContext.Provider>
  );
};

export default ArProvider;
