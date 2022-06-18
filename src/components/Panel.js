import PanelWrapper, { PanelInputs } from "../styled";

const Panel = (props) => {
  return (
    <PanelWrapper>
      <label htmlFor="pages">Number of webpages </label>
      <PanelInputs
        type="number"
        name="pages"
        onChange={props.function}
        value={props.pages}
        min="1"
      />
      <br />
      <br />
      <label htmlFor="lang">Number of languages </label>
      <PanelInputs
        type="number"
        name="languages"
        onChange={props.function}
        value={props.languages}
        min="1"
      />
    </PanelWrapper>
  );
};

export default Panel;
