import React from "react";
import "./App.css";
import SearchInput from "./Components/SearchBar";
import { useState } from "react";

const App: React.FC = () => {
  const [ingridient, setingridient] = useState<string>("");

  return (
    <div className="App">
      <h1>Recipe Ideas</h1>
      <SearchInput />
    </div>
  );
};

export default App;
