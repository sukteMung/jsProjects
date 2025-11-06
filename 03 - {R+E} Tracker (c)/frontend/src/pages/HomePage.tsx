import { useState } from "react";
import "../styles/HomePage.css";

interface HomePageProps {
  onSearch: (query: string) => void;
}
function HomePage({ onSearch }: HomePageProps) {
  const [text, setText] = useState("");
  const handleSearch = () => {
    onSearch(text);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vw-100"
      style={{ height: "80vh" }}
    >
      <div
        className="flex-column bg-dark text-white d-flex justify-content-center align-items-center"
        style={{
          width: "30vw",
          height: "20vh",
          borderRadius: "20px",
        }}
      >
        <span>
          <h1>Welcome to LeagueStats.gg</h1>
          <input
            className="p-3 border rounded-3 text-light"
            type="text"
            placeholder="Enter username#tag"
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSearch}>Search!</button>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
