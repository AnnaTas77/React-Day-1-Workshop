import React from "react";
// Import Hero here
import Hero from "./components/Hero.js";
import Title from "./components/Title.js";
import NavBar from "./components/NavBar.js";

function App() {
  const superHeros = [
    {
      name: "Batman",
      location: "Gotham City",
      enemy: "The Joker",
      img: "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
      wiki: "https://en.wikipedia.org/wiki/Batman",
    },
    {
      name: "Flash",
      location: "Cental City",
      enemy: "Reverse Flash",
      img: "https://static.dc.com/dc/files/default_images/Char_Profile_Flash_20190116_5c3fcaaa18f0e8.03668117.jpg",
      wiki: "https://en.wikipedia.org/wiki/Flash_(DC_Comics_character)",
    },
    {
      name: "Superman",
      location: "Metropolis City",
      enemy: "Lex Luthor",
      img: "https://static.dc.com/2023-03/dc_superman_hub_4up_Community_1x1.jpg?w=900",
      wiki: "https://en.wikipedia.org/wiki/Superman",
    },

    {
      name: "Aquaman",
      location: "Australia",
      enemy: "Black Manta",
      img: "https://static.dc.com/2024-01/aquaman_atlk_digital_1x1.jpg?w=900",
      wiki: "https://en.wikipedia.org/wiki/Aquaman",
    },

    {
      name: "Wonder Woman",
      location: "England",
      enemy: "God of War Ares/Mars",
      img: "https://static.dc.com/dc/files/default_images/Char_Profile_WonderWoman_20190116_5c3fc6aa51d0e3.49076914.jpg",
      wiki: "https://en.wikipedia.org/wiki/Wonder_Woman",
    },
  ];

  return (
    <>
      <NavBar />
      <Title />
      <div className="heroCards">
        {superHeros.map((hero, index) => (
          <Hero key={index} hero={hero} />
        ))}
      </div>
    </>
  );
}

module.exports = App;
