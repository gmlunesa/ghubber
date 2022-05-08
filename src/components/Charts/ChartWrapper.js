import styled from "styled-components";

const Colors = ["#e0b1cb", "#be95c4", "#9f86c0", "#5e548e", "#231942"];

const ChartWrapper = styled.div`
  border-radius: var(--radius) !important;
  background-color: var(--clr-main);
  h2 {
    margin-top: 1rem;
    font-size: 1rem;
    text-align: center;
    color: var(--clr-subheadline);
  }
  .recharts-text {
    font-size: 0.6rem;
  }

  .recharts-label {
    font-size: 0.85rem;
  }
  .recharts-wrapper {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export { ChartWrapper, Colors };
