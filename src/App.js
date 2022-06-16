import { useState } from "react";
import { ServicesList } from "./components/Services-List";
import "./index.css";

// --------------------------------------- LOGIC -------------------------------------------------------

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function App() {
  // create an [] to store the initial state (unchecked = false) of the checkboxes
  const [checkedState, setCheckedState] = useState(
    new Array(ServicesList.length).fill(false)
  );

  console.log(checkedState);
  // useState for calculated total budget
  const [total, setTotal] = useState(0);
  // every time we click a checkbox, the state updates to true if the conditions occur, otherwise...remains false
  const handleOnChange = (position) => {
    // we mapped checkedState[] & if position value is equal to the current id, then we modify its value (from false to true), otherwise it remains false. This allows me to check or uncheck boxes.
    const updatedCheckedState = checkedState.map((item, id) =>
      id === position ? !item : item
    );

    setCheckedState((prev) => (prev = updatedCheckedState));
    // setCheckedState tends to update asyncronally, so it doesn´t guarantee us that we will get the updated value in the next line
    // so I created a new variable to apply the reduce() method to it
    const totalPrice = updatedCheckedState.reduce((sum, currentState, id) => {
      if (currentState === true) {
        // if true -> add price.value to "sum" through the below operation
        return sum + ServicesList[id].price;
      }
      // if false -> don´t add price.value & return the previous "sum" amount
      return sum;
      // "0" is the accumulator value for "sum"
    }, 0);
    // applied above variable to setTotal to get the final price
    setTotal((prev) => (prev = totalPrice));
  };
  // ------------------------------------------------ RENDERING ----------------------------------------------
  return (
    <div className="App">
      <h3>Which services do you require?</h3>
      <div className="services-list">
        {ServicesList.map(({ name, price }, id) => {
          return (
            <div key={id}>
              <div className="services-list-item">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${id}`}
                  name={name}
                  value={name}
                  // this attribute can be either true or false, depending on "checkState" current state
                  checked={checkedState[id]}
                  // added this () so that it changes the state when is clicked or unclicked by handleOnChange
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
