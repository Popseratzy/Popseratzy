import React from "react";
import { useThemeContext, useUpdateThemeContext } from "./ThemeContext";

const SwitchThemeButton = () => {
  const theme = useThemeContext();
  const setTheme = useUpdateThemeContext();

  const HandleClick = (e) => {
    if (theme.current === "dev") {
      root.style.setProperty("--testGrad1", "var(--gameGrad1)");
      root.style.setProperty("--testGrad2", "var(--gameGrad2)");
      setTheme({ current: "game" });
    } else if (theme.current === "game") {
      root.style.setProperty("--testGrad1", "var(--devGrad1)");
      root.style.setProperty("--testGrad2", "var(--devGrad2)");
      setTheme({ current: "dev" });
    }
  };

  return <button onClick={HandleClick}>CLICK ME</button>;
};

export default SwitchThemeButton;
