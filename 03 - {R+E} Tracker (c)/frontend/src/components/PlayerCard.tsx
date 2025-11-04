function PlayerCard() {
  return (
    <div
      className="card"
      style={{ width: "18rem", backgroundColor: "#c53d3d" }}
    >
      <img src="..." className="card-img-top" alt="icon" />
      <div className="card-body">
        <h5 className="card-title">Player UserName</h5>
        <a
          href="#"
          className="btn btn-primary"
          style={{ backgroundColor: "#db1818ff", border: "none" }}
        >
          Update!
        </a>
      </div>
    </div>
  );
}

export default PlayerCard;
