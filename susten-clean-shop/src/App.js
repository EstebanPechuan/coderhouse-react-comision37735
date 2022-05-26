import React from "react";
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ItemListContainer />
    </React.Fragment>
  );
}

export default App;
