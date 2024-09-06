import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import ThemeProvider from "./components/ThemeContext";
import SwitchThemeButton from "./components/SwitchThemeButton";

function App() {
  return (
    <>
      <ThemeProvider value={{ current: "dev" }}>
        <NavBar />
        <div className="NavLine"></div>
        <Header></Header>
        <SwitchThemeButton />
      </ThemeProvider>
    </>
  );
}

export default App;
