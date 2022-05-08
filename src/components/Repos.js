import React, { useContext } from "react";
import styled from "styled-components";
import { GhubberContext } from "../context/context";
import { Pie, VerticalBar } from "./Charts";
const Repos = () => {
  const { repos } = useContext(GhubberContext);

  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;

    // Disregard null values
    if (!language) return total;

    // Add entry for new language
    if (!total[language]) {
      total[language] = { label: language, count: 1, stars: stargazers_count };
    } else {
      // Increment value for added language
      total[language] = {
        ...total[language],
        count: total[language].count + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  // Sort the languages and choose top 5
  const topUsedLanguages = Object.values(languages)
    .sort((a, b) => {
      return b.count - a.count;
    })
    .slice(0, 5);

  // Sort the most starred languages and choose top 5
  const topStarredLanguages = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .slice(0, 5);

  const topStarredProjects = Object.values(repos)
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 5)
    .map(({ name, stargazers_count }) => ({
      label: name,
      stargazers_count,
    }));

  const topForkedLanguages = Object.values(repos)
    .sort((a, b) => {
      return b.forks - a.forks;
    })
    .slice(0, 5)
    .map(({ name, forks }) => ({
      label: name,
      forks,
    }));

  console.log("Most Used");
  console.log(topUsedLanguages);
  console.log("Most Popular Language");
  console.log(topStarredLanguages);
  console.log("Most starred Projects");
  console.log(topStarredProjects);
  console.log("Most Forked Projects");
  console.log(topForkedLanguages);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie
          title="Top Used Language"
          data={topUsedLanguages}
          nameKey="label"
          dataKey="count"
        />

        <VerticalBar
          title="Top Starred Projects"
          data={topStarredProjects}
          xLabel="Language"
          yLabel="Stars"
          nameKey="label"
          dataKey="stargazers_count"
        />
        <Pie
          title="Top Starred Language"
          data={topStarredLanguages}
          nameKey="label"
          dataKey="stars"
          isDoughnut="true"
        />
        <VerticalBar
          title="Top Forked Projects"
          data={topForkedLanguages}
          xLabel="Repositories"
          yLabel="Forks"
          nameKey="label"
          dataKey="forks"
        />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
`;

export default Repos;
