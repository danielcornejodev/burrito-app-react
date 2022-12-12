import logo from './logo.svg';
// import './App.css';

import { useState, useEffect } from "react";
import "./styles.css";
import INGREDIENTS from "./ingredients";
import BurritoBuilder from "./BurritoBuilder";

export default function App() {
  const [allIngredients, setAllIngredients] = useState(INGREDIENTS);
  
  return (
    <div className="App">
      <BurritoBuilder allIngredients={allIngredients} />
    </div>
  );
}
