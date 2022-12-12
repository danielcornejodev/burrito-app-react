import { useState, useEffect } from "react";
import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import INGREDIENTS from "./ingredients";
import BurritoBuilder from "./BurritoBuilder";

export default function App() {
  const [allIngredients, setAllIngredients] = useState(INGREDIENTS);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<BurritoBuilder allIngredients={allIngredients} />}
        />
      </Routes>
    </div>
  );
}
