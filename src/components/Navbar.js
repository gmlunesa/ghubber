import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const isUser = isAuthenticated && user;
  console.log(user);
  return (
    <Wrapper>
      <h1>Ghubber</h1>
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-main);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  h1 {
    font-size: 1.75rem;
    margin-bottom: 0px;
  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: 400;
    font-style: italic;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: var(--clr-highlight);
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
`;

export default Navbar;
