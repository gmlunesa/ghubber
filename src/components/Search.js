import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GoSearch, GoWatch } from "react-icons/go";
import { GhubberContext } from "../context/context";
const Search = () => {
  const [user, setUser] = useState("");
  const { requests, error, searchGithubUser, isLoading } =
    useContext(GhubberContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <GoSearch />
            <input
              type="text"
              placeholder="Enter Github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && !isLoading && (
              <button type="submit">Search</button>
            )}
          </div>
        </form>
        <h2>
          <GoWatch /> Requests left: {requests} / 60
        </h2>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-main);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-secondary);
      color: var(--clr-subheadline);
      padding: 0.25rem 0.5rem;
      font-family: var(--ff-secondary);
    }
    input::placeholder {
      color: var(--clr-subheadline);
      text-transform: capitalize;
    }
    svg {
      color: var(--clr-subheadline);
    }
    input,
    button,
    svg {
      font-size: 1rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h2 {
    margin-bottom: 0;
    color: var(--clr-subheadline);
    font-weight: 400;
    font-size: 1.75rem;
  }
`;

const ErrorWrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: var(--clr-highlight);
  }
`;
export default Search;
