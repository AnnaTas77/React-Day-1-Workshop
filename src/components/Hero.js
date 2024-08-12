import React from "react";

function Hero({ hero }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{hero.name}</h1>
          <img src={hero.img} alt={hero.name} />
          <p className="card-text">
            The hero {hero.name} is from {hero.location}
          </p>
          <p className="card-text">
            {hero.name}'s nemesis is {hero.enemy}
          </p>
          <button>
            <a href={hero.wiki} target="_blank">
              More Info for {hero.name}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

module.exports = Hero;
