import React from "react";
import WeatherCard from "./APishortcut/WeatherApi";
import GithubUserSearch from "./Components/GithubApi";
const Page = () => {
  return (
    <div>
  <WeatherCard/>
  <GithubUserSearch />
    </div>
  );
};

export default Page;
