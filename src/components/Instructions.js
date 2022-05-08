import React from "react";
import styled from "styled-components";
import { GoPencil, GoCloudDownload, GoSmiley } from "react-icons/go";

const Instructions = () => {
  return (
    <Wrapper>
      <div className="info">
        <h2>How does Ghubber work?</h2>
        <ul>
          <li>
            <GoPencil />
            &nbsp;Enter a valid Github username.
          </li>
          <li>
            <GoCloudDownload />
            &nbsp;Ghubber retrieves the Github user's data.
          </li>
          <li>
            <GoSmiley />
            &nbsp;Enjoy the results.
          </li>
        </ul>
        {/* <p>Please enter a username to get started.</p> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .info {
    display: block;
    margin: 0 auto;
    margin-top: 10rem;
    text-align: center;
  }

  li {
    opacity: 0.8;
    margin-top: 1rem;
  }
`;

export default Instructions;
