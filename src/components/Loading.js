import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    width: 5rem;
    height: 5rem;
    border: 15px solid var(--clr-accent);
    border-top: 15px solid var(--clr-secondary);
    border-radius: 50%;
    animation: spinner 2s linear infinite;
    display: block;
    margin: 0 auto;
  }
`;

export default Loading;
