export default function Quantity(props) {
  function handlePanelChange(op) {
    props.addProduct({
      type: "text",
      name: props.id,
      value: parseInt(props.budgetFormData[props.id]) + op,
    });
  }
  return (
    <div className="quantity">
      <button onClick={() => handlePanelChange(1)}>+</button>
      <input
        type="text"
        onChange={(event) => props.addProduct(event.target)}
        id={props.id}
        name={props.id}
        value={props.budgetFormData[props.id]}
      />
      <button onClick={() => handlePanelChange(-1)}>-</button>
    </div>
  );
}
