import React from "react";
// Import Hero here
import Hero from "./components/Hero.js";

function App() {
  const superHeros = [
    {
      name: "Batman",
      location: "Gotham City",
      enemy: "The Joker",
    },
    {
      name: "Flash",
      location: "Cental City",
      enemy: "Reverse Flash",
    },
    {
      name: "Superman",
      location: "Metropolis City",
      enemy: "Lex Luthor",
    },
  ];

  return (
    <div className="heroCards">
      {superHeros.map((hero, index) => (
        <Hero key={index} hero={hero} />
      ))}
    </div>
  );
}

module.exports = App;
