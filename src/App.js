/* eslint-disable no-restricted-globals */
import { useState, useEffect } from "react";
import "./App.css";
import Panel from "./components/Panel";

function App() {
  const [total, setTotal] = useState(0);
  const [cost, setCost] = useState({
    website: false,
    seo: false,
    google: false,
    pages: 1,
    languages: 1,
    total: 0,
  });
  const [isWebChecked, setIsWebChecked] = useState(false);

  useEffect(() => {
    calculateTotal();

    setIsWebChecked(cost.website);
  }, [cost]);

  function handleOnChange(event) {
    const { name, value, type, checked } = event.target;
    setCost((prevCost) => {
      return {
        ...prevCost,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const calculateTotal = (event) => {
    let newTotal =
      0 +
      (cost.website && 500) +
      (cost.seo && 300) +
      (cost.google && 200) +
      ((cost.pages > 1 || cost.languages > 1) &&
        cost.pages * cost.languages * 30);

    setTotal((prev) => (prev = newTotal));
  };

  return (
    <div classname="App">
      <h3> Which services do you require?</h3>
      <p>
        <input
          type="checkbox"
          name="website"
          onChange={handleOnChange}
          value="500"
        />{" "}
        A website (500 €)
      </p>
      {isWebChecked && (
        <Panel
          function={handleOnChange}
          pages={cost.pages}
          languages={cost.languages}
        />
      )}
      <p>
        <input
          type="checkbox"
          name="seo"
          onChange={handleOnChange}
          value="300"
        />{" "}
        A SEO consultancy (300 €)
      </p>
      <p>
        <input
          type="checkbox"
          name="google"
          onChange={handleOnChange}
          value="200"
        />{" "}
        A Google Ads Campaign (200 €)
      </p>

      <p>
        {" "}
        <strong>Total price: {total} €</strong>{" "}
      </p>
    </div>
  );
}

export default App;
