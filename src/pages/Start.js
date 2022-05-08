import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { GoRocket } from "react-icons/go";
import heroImg from "../images/hero-img.png";
const Start = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <NavBar>
        <p className="logo">Ghubber</p>
        <button onClick={loginWithRedirect}>Login</button>
      </NavBar>

      <section className="section-hero">
        <div className="hero-wrapper">
          <div className="hero-text-container">
            <h1 className="hero-title">Get Github user information</h1>
            <p className="hero-tagline">
              Consolidate Github profile information and retrieve useful data.
            </p>
            <button onClick={loginWithRedirect}>Get started</button>
            <p className="hero-credit">
              {new Date().getFullYear()}
              &nbsp;
              <GoRocket />
              &nbsp;Created by{" "}
              <a
                href="https://gmlunesa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                gmlunesa
              </a>
            </p>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Ghubber banner" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
  background-color: var(--clr-main);
  display: flex;
  flex-wrap: wrap;
  align-items: start;

  button {
    font-size: 1.25rem;
  }

  .section-hero {
    width: 100vw;
    padding: 0 50px;
    display: grid;
  }

  .hero-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .hero-text-container {
    width: 40%;
  }

  .hero-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--dark-gray);
  }

  .hero-tagline {
    margin-bottom: 30px;
    color: #6d6d6d;
    font-size: 1.25rem;
  }

  .hero-image {
    width: 60%;
  }

  .hero-credit {
    margin-top: 2rem;
  }

  a:hover {
    box-shadow: inset 100px 0 0 0 var(--clr-highlight);
    color: white;
  }

  @media (max-width: 769px) {
    .hero-wrapper {
      align-items: center;
      flex-wrap: wrap;
    }
    .hero-text-container {
      width: 100%;
    }

    .hero-image {
      display: none;
    }
  }
`;

const NavBar = styled.nav`
  margin: 0;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;
  background: var(--clr-main);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  width: auto;
  flex: 0 0 100%;
  align-items: start;
  h1 {
    font-size: 2rem;
    margin-bottom: 0px;
  }
  .logo {
    font-size: 2rem;
    margin-bottom: 0;
    font-weight: 400;
  }

  @media (max-width: 769px) {
    max-height: 100px;
    button {
      display: none;
    }
  }
`;

export default Start;
