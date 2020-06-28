import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const Apps = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Birdie",
      animal: "Bird",
      breed: "Parrot",
    }),
    React.createElement(Pet, {
      name: "Meow",
      animal: "Cat",
      breed: "exotic",
    }),
  ]);
};

render(React.createElement(Apps), document.getElementById("root"));
