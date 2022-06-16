import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);
  const [cost, setCost] = useState({
    website: false,
    seo: false,
    google: false,
  });

  useEffect(() => {
    calculateTotal();
  });

  const handleOnChange = (event) => {
    let { name } = event.target;
    let newCost = { ...cost };
    newCost[name] = !newCost[name];
    setCost(newCost);
  };

  const calculateTotal = (event) => {
    let newTotal =
      0 + (cost.website && 500) + (cost.seo && 300) + (cost.google && 200);

    setTotal(newTotal);
  };

  return (
    <div className="App">
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
