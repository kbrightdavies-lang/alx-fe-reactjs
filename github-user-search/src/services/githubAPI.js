import axios from "axios";
import.meta.env.VITE_APP_GITHUB_API_KEY

const BASE_URL = "https://api.github.com";

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    });
    return response.data;
  } catch (error) {
    console.error("GitHub API Error:", error);
    throw error;
  }
};
export default fetchUserData;

