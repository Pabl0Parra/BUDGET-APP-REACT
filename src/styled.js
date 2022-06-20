import styled from "styled-components";

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  inline-size: fit-content;
  border: solid 3px rgb(2, 1, 1);
  border-radius: 10px;
  max-width: 600px;
  padding: 1%;
`;

export const PanelInputs = styled.input`
  text-align: center;
  cursor: pointer;
  border: none;
  max-width: 60px !important;
`;

export default PanelWrapper;
