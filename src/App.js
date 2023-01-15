import { useState, useEffect } from "react";
import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import INGREDIENTS from "./ingredients";
import BurritoBuilder from "./BurritoBuilder";

export default function App() {
  const [allIngredients, setAllIngredients] = useState(INGREDIENTS);
  const [proteinIngredients, setProteinIngredients] = useState([]);
  const [riceIngredients, setRiceIngredients] = useState([]);
  const [beanIngredients, setBeanIngredients] = useState([]);
  const [toppingIngredients, setToppingIngredients] = useState([]);
 
  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3000/proteins'),
      fetch('http://localhost:3000/rice'),
      fetch('http://localhost:3000/beans'),
      fetch('http://localhost:3000/toppings')
    ])
      .then(([resProteins, resRice, resBeans, resToppings]) => 
        Promise.all([resProteins.json(), resRice.json(), resBeans.json(), resToppings.json()])
      )
      .then(([dataProteins, dataRice, dataBeans, dataToppings]) => {
        setProteinIngredients(dataProteins);
        setRiceIngredients(dataRice);
        setBeanIngredients(dataBeans);
        setToppingIngredients(dataToppings);
      })
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<BurritoBuilder 
            proteinIngredients={proteinIngredients}
            allIngredients={allIngredients}
            riceIngredients={riceIngredients}
            toppingIngredients={toppingIngredients}
             />}
        />
      </Routes>
    </div>
  );
}
