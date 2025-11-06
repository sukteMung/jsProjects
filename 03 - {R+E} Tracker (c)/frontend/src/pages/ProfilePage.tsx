import PlayerCard from "../components/PlayerCard";
import PlayerNav from "../components/PlayerNav";
import PlayerRanked from "../components/PlayerRanked";
import "../styles/ProfilePage.css";
function ProfilePage() {
  return (
    <>
      <div className="profile">
        <PlayerCard />
        <PlayerNav />
        <PlayerRanked />
      </div>
    </>
  );
}

export default ProfilePage;
