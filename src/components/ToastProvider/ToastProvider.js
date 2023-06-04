import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArr, setToastArr] = React.useState([]);

  return (
    <ToastContext.Provider value={{ toastArr, setToastArr }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
