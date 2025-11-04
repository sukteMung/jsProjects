import "../styles/HomePage.css";
function HomePage() {
  return (
    <div className="flex-column min-vh-100 bg-dark text-white d-flex justify-content-center align-items-center">
      <h1 className="">Welcome to LeagueStats.gg</h1>
      <input
        className="p-3 border rounded-3 text-light"
        type="text"
        placeholder="Search For Your Account Here!"
      />
    </div>
  );
}

export default HomePage;
