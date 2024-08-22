import React, { useState } from "react";
import {
  AccordianContext,
  AccordianItemContext,
  useAccordianContext,
  useAccordianItemContext,
} from "./AccordianContext";

export const AccordianToggle = ({ children }) => {
  const { handlePanelClick } = useAccordianContext();
  const { id } = useAccordianItemContext();
  return <button onClick={() => handlePanelClick(id)}>{children}</button>;
};

export const AccordianPanel = ({ children }) => {
  const { id } = useAccordianItemContext();
  const { activePanels } = useAccordianContext();
  if (!activePanels.includes(id)) return null;
  return <div>{children}</div>;
};

export const AccordianItem = ({ children, id }) => {
  const value = {
    id,
  };

  return (
    <AccordianItemContext.Provider value={value}>
      <div>{children}</div>
    </AccordianItemContext.Provider>
  );
};

const Accordian = ({ children, collapsible }) => {
  const [activePanels, setActivePanels] = useState([]);

  const handlePanelClick = (id) => {
    setActivePanels((prevActivePanels) => {
      if (prevActivePanels.includes(id)) {
        // Panel is already open, so close it if collapsible
        return collapsible
          ? prevActivePanels.filter((panelId) => panelId !== id)
          : prevActivePanels;
      } else {
        // Open the panel
        return [...prevActivePanels, id];
      }
    });
  };

  const value = {
    activePanels,
    handlePanelClick,
  };

  return (
    <AccordianContext.Provider value={value}>
      <div>{children}</div>
    </AccordianContext.Provider>
  );
};

export default Accordian;
