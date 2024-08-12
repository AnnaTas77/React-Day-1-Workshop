import React from "react";

function Hero({ hero }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{hero.name}</h1>
          <p className="card-text">
            The hero {hero.name} is from {hero.location}
          </p>
          <p className="card-text">
            {hero.name}'s nemesis is {hero.enemy}
          </p>
        </div>
      </div>
    </>
  );
}

module.exports = Hero;
