import axios from "axios";

async function advancedUserSearch(username, location, minRepos) {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>${minRepos}+`;

  const finalQuery = query.trim();

  const response = await axios.get(
    `https://api.github.com/search/users?q=${finalQuery}`,
    {
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    }
  );

  return response.data.items; // returns user list
}

export default advancedUserSearch;

