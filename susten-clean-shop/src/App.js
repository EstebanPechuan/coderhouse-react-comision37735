import React from "react";
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";

import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0)
  return (
    <React.Fragment>
      <Navbar />
      <ItemListContainer />
      <ItemCount setNumber={setNumber} number={number} stock={5} initial="1" />
    </React.Fragment>
  );
}

export default App;
