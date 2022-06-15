import { useState } from "react";
import { services } from "./components/services";
import "./index.css";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );

  console.log(checkedState);

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, id) =>
      id === position ? !item : item
    );

    setCheckedState((prev) => (prev = updatedCheckedState));

    const totalPrice = updatedCheckedState.reduce((sum, currentState, id) => {
      if (currentState === true) {
        return sum + services[id].price;
      }
      return sum;
    }, 0);

    setTotal((prev) => (prev = totalPrice));
  };

  return (
    <div className="App">
      <h3>Which services do you require?</h3>
      <div className="services-list">
        {services.map(({ name, price }, id) => {
          return (
            <div key={id}>
              <div className="services-list-item">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${id}`}
                  name={name}
                  value={name}
                  checked={checkedState[id]}
                  onChange={() => handleOnChange(id)}
                />
                <label htmlFor={`custom-checkbox-${id}`}>{name}</label>
                <span className="price-section">
                  {getFormattedPrice(price)}
                </span>
              </div>
            </div>
          );
        })}

        <div className="services-total-price">
          <h4>
            <strong>Total: {getFormattedPrice(total)}</strong>
          </h4>
        </div>
      </div>
    </div>
  );
}
