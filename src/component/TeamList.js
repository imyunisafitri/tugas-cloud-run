import React from "react";

const TeamList = ({ team }) => {
  const { img, name, position } = team;
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="info-card">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default TeamList;
