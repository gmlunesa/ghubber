import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h2>Sorry, this page doesn't exist.</h2>
        <Link to="/" className="btn">
          Back to homepage
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-secondary);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h2 {
    font-size: 2rem;
    color: var(--clr-highlight);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
