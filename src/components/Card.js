import React, { useContext } from "react";
import { GhubberContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
  const { githubUser } = useContext(GhubberContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{twitter_username && `@${twitter_username}`}</p>
        </div>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          Follow
        </a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness> {company || "Unprovided"}
        </p>
        <p>
          <MdLocationOn></MdLocationOn> {location || "Earth"}
        </p>
        <a href={`${blog}`} target="_blank" rel="noopener noreferrer">
          <MdLink></MdLink>
          {blog}
        </a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: var(--clr-main);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "User";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-main);
    color: var(--clr-subheadline);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    padding: 0.5rem 1rem 0 1rem;
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-accent);
      border: 1px solid var(--clr-accent);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-accent);
        color: var(--clr-main);
      }
    }
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-highlight);
      transition: var(--transition);
      svg {
        color: var(--clr-subheadline);
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
export default Card;
