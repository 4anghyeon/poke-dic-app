import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainContainer from "./components/main/MainContainer";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <MainContainer />
    </RecoilRoot>
  );
}

export default App;
