import React, { useContext } from "react";

export const AccordianContext = React.createContext(null);
export const AccordianItemContext = React.createContext(null);

export function useAccordianContext() {
  const context = useContext(AccordianContext);
  return context;
}

export function useAccordianItemContext() {
  const context = useContext(AccordianItemContext);
  return context;
}
