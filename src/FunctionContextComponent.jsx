import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>FunctionContextComponent</div>
    </>
  );
};
