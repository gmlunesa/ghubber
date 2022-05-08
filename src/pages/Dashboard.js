import React, { useContext } from "react";
import {
  Info,
  Repos,
  User,
  Search,
  Navbar,
  Loading,
  Instructions,
} from "../components";
import { GhubberContext } from "../context/context";
const Dashboard = () => {
  const { isLoading, githubUser } = useContext(GhubberContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <Loading />
      </main>
    );
  }

  if (Object.entries(githubUser).length === 0) {
    return (
      <main>
        <Navbar />
        <Search />
        <Instructions />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
