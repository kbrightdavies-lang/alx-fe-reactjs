import React, { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const result = await fetchUserData(username);
      setUser(result);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "250px",
            marginRight: "0.5rem",
          }}
        />
        <button
          type="submit"
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p style={{ marginTop: "1rem" }}>Loading...</p>}

      {/* Error */}
      {error && (
        <p style={{ marginTop: "1rem", color: "red" }}>
          Looks like we can't find the user.
        </p>
      )}

      {/* Successful Result */}
      {user && (
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            width: "300px",
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "80px", borderRadius: "50%" }}
          />
          <h3>{user.name || user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
