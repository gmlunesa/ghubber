import React, { useContext } from "react";
import { GhubberContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { githubUser } = useContext(GhubberContext);
  const { login, public_repos, followers, following, public_gists } =
    githubUser;

  const baseUrl = `https://github.com/${login}?tab=`;
  const gistBaseUrl = `https://gist.github.com/${login}`;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "Repos",
      value: public_repos,
      url: `${baseUrl}repositories`,
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "Followers",
      value: followers,
      url: `${baseUrl}followers`,
    },
    {
      id: 1,
      icon: <FiUserPlus className="icon" />,
      label: "Following",
      value: following,
      url: `${baseUrl}following`,
    },
    {
      id: 1,
      icon: <GoGist className="icon" />,
      label: "Gists",
      value: public_gists,
      url: `${gistBaseUrl}`,
    },
  ];
  return (
    <section>
      <Wrapper className="section-center">
        {items.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, url }) => {
  return (
    <article className="item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="accent">{icon}</span>
      </a>
      <div>
        <h2>{value}</h2>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-main);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h2 {
      margin-bottom: 2px;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .accent {
      background: var(--clr-tertiary);
      color: var(--clr-highlight);
    }
  }
`;

export default UserInfo;
