"use client";

import { useEffect } from "react";
import axios from "axios";

const GithubUserSearch = () => {
  const fetchGithubUser = async (username) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      return res.data;
    } catch (err) {
      throw new Error("User not found or API error");
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const username = document.getElementById("usernameInput").value;

    if (username) {
      try {
        const data = await fetchGithubUser(username);
        document.getElementById("error").textContent = "";
        document.getElementById("userData").innerHTML = `
         <div class="flex items-center">
            <img src="${data.avatar_url}" alt="${
          data.login
        }" class="w-20 h-20 rounded-full mr-5" />
            <div>
              <h2 class="text-3xl font-bold">${data.login}</h2>
              <p>${data.bio ? data.bio : "No bio available"}</p>
            </div>
          </div>
          <div class="mt-5">
            <p>Public Repos: ${data.public_repos}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Location: ${
              data.location ? data.location : "No location available"
            }</p>
            <a href="${
              data.html_url
            }" target="_blank" rel="noopener noreferrer" class="text-blue-400">
              View Profile on GitHub
            </a>
          </div>
        `;
      } catch (error) {
        document.getElementById("error").textContent = error.message;
        document.getElementById("userData").innerHTML = "";
      }
    }
  };

  useEffect(() => {
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", handleSearch);

    return () => {
      form.removeEventListener("submit", handleSearch);
    };
  }, []);
  
  return (
    <div className="text-white p-12">
      <h1 className=" text-5xl text-cyan-300 font-bold text-center uppercase">
        Github User Search
      </h1>
      <form id="searchForm" className="text-black">
        <input
          type="text"
          id="usernameInput"
          placeholder="Enter GitHub username"
          className="w-96 h-10 rounded-full my-5 px-4 bg-white"
        />
        <button
          type="submit"
          className="ml-4 p-2 bg-blue-500 rounded-full text-white"
        >
          Search
        </button>
      </form>
      <div id="error" className="text-red-500 text-center mt-4"></div>
      <div id="userData" className="mt-10 p-5 bg-gray-800 rounded-lg"></div>
    </div>
  );
};

export default GithubUserSearch;
