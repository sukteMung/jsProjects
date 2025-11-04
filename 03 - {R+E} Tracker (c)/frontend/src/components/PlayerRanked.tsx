import "../styles/PlayerRanked.css";
function PlayerRanked() {
  return (
    <div className="container">
      <div className="title">Ranked Solo</div>
      <img
        src="https://static.bigbrain.gg/assets/lol/ranks/s13/gold.png"
        alt="rank img"
      />
      <div className="rank">
        <h2>rank 4</h2>
        <h2>12 lp</h2>
      </div>
      <div className="stats">
        <h2>12W 4L</h2>
        <h2>12% Win Rate</h2>
      </div>
    </div>
  );
}

export default PlayerRanked;
