import "../styles/PlayerNav.css";
function PlayerNav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link text-white" aria-current="page" href="#">
          Overview
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Champions
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Live Game
        </a>
      </li>
    </ul>
  );
}

export default PlayerNav;
