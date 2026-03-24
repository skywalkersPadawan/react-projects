import { useState } from "react";
import User from "./user";
import "./styles.css";

// Custom hook to fetch github user data
import useGithubProfile from "../../hooks/useGithubProfile";

export default function GithubProfileFinder() {
  const DEFAULT_USER = "skywalkersPadawan";
  const [userName, setUserName] = useState(DEFAULT_USER);
  const [search, setSearch] = useState(DEFAULT_USER);

  const { data, loading, error } = useGithubProfile(search);

  function handleSubmit() {
    if (!userName.trim()) return;
    setSearch(userName);
    setUserName(""); // clears input
  }

  if (loading) return <h1>Loading data! Please wait</h1>;
  if (error) return <h1>Error fetching data</h1>;

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      {data ? <User user={data} /> : <p>No user found</p>}
    </div>
  );
}
