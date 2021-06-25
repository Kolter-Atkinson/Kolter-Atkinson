const btn = document.querySelector(".btn");
const Name = document.getElementById("name");
const homeworld = document.getElementById("homeworld");
const gender = document.getElementById("gender");

const addInfo = () => {
  console.log("Clicked");
  const randomNumber = Math.ceil(Math.random() * 83);
  fetch(`https://swapi.dev/api/people/${randomNumber}/`)
    .then((response) => response.json())
    .then((character) => {
      console.log(character);
      Name.innerText = `This character is named ${character.name}`;
      gender.innerText = `This character is ${character.gender}`;
      fetch(character.homeworld)
        .then((response) => response.json())
        .then((planet) => {
          homeworld.innerText = `This character is from ${planet.name}`;
        });
    });
};

btn.addEventListener("click", addInfo);
