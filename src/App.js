import { useState, useEffect } from "react";
import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import INGREDIENTS from "./ingredients";
import BurritoBuilder from "./BurritoBuilder";
import OrderRecap from "./OrderRecap";

export default function App() {
  const navigate = useNavigate();
  const [allIngredients, setAllIngredients] = useState(INGREDIENTS);
  const [proteinIngredients, setProteinIngredients] = useState([]);
  const [riceIngredients, setRiceIngredients] = useState([]);
  const [beanIngredients, setBeanIngredients] = useState([]);
  const [toppingIngredients, setToppingIngredients] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [newOrder, setNewOrder] = useState(false);
 
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

  useEffect(() => {
    if (orderSubmitted) {
      navigate("/orderplaced");
    }
  }, [orderSubmitted]);

  useEffect(() => {
    if (newOrder) {
      navigate("/");
    }
  }, [newOrder]);


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
            setOrderSubmitted={setOrderSubmitted}
            setNewOrder={setNewOrder}
             />}
        />
        <Route
          path="/orderplaced"
          element={<OrderRecap 
            setNewOrder={setNewOrder}
            setOrderSubmitted={setOrderSubmitted}
          />}
        />
      </Routes>
    </div>
  );
}
