function PlayerCard() {
  return (
    <div
      className="card"
      style={{ width: "18rem", backgroundColor: "#FF595E" }}
    >
      <img src="..." className="card-img-top" alt="icon" />
      <div className="card-body">
        <h5 className="card-title">Player UserName</h5>
        <a
          href="#"
          className="btn btn-primary"
          style={{
            backgroundColor: "#E1E6E1",
            border: "none",
            color: "#000000",
          }}
        >
          Update!
        </a>
      </div>
    </div>
  );
}

export default PlayerCard;
