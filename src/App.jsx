import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { useNavigation } from "react-router-dom";
import LoadSpinner from "./Components/LoadSpinner";

function App() {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadSpinner></LoadSpinner>;
  }
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
