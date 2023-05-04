import { useState, useEffect } from "react";
import TeamList from "../component/TeamList";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/data/karasuno.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div className="timlist">
      <h1>Karasuno Teams</h1>
      <div className="timlist-card">
        {teams.map((team) => (
          <TeamList key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
