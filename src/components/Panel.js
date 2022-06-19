import PanelWrapper, { PanelInputs } from "../styled";

const Panel = (props) => {
  return (
    <PanelWrapper>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="pages" className="col-form-label">
            Number of webpages
          </label>
        </div>
        <div className="col-auto">
          <button
            type="button"
            name="incPages"
            className="btn btn-danger btn-sm"
            // onChange={props.functionIncPages}
            // value={props.pages}
          >
            +
          </button>
        </div>
        <div className="col-auto">
          <PanelInputs
            type="number"
            name="pages"
            className="form-control"
            onChange={props.functionPages}
            value={props.pages}
            min="1"
          />
        </div>
        <div className="col-auto">
          <button
            type="button"
            name="decPages"
            className="btn btn-danger btn-sm"
          >
            -
          </button>
        </div>
      </div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="languages" className="col-form-label">
            Number of languages
          </label>
        </div>
        <div className="col-auto">
          <button
            type="button"
            name="incLang"
            className="btn btn-danger btn-sm"
          >
            +
          </button>
        </div>
        <div className="col-auto">
          <PanelInputs
            type="number"
            name="languages"
            className="form-control"
            onChange={props.functionLang}
            value={props.languages}
            min="1"
          />
        </div>
        <div className="col-auto">
          <button
            type="button"
            name="decLang"
            className="btn btn-danger btn-sm"
          >
            -
          </button>
        </div>
      </div>
    </PanelWrapper>
  );
};

export default Panel;
