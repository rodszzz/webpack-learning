import _ from "lodash";
import myName from "./myName";
import "./style.css";
import Pitaya from "./pitayaq21.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  // Lodash foi importado pela linha 1 lá em cima
  element.innerHTML = _.join(["Oioi", "webpack"], " ");
  element.classList.add("hello");

  // bloco de txt com minha funcao myName
  const bloco = document.createElement("div");
  bloco.textContent = myName("Rods");
  // bloco.classList.add("hello");

  element.appendChild(bloco);

  // adiciona a foto da pitayaq !
  const pitayaPhoto = new Image();
  pitayaPhoto.src = Pitaya;

  element.appendChild(pitayaPhoto);

  console.log(Data);
  console.log(Notes);

  return element;
}

// function bloco() {
//   return bloco;
// }

document.body.appendChild(component());
// document.body.appendChild(bloco());
