import { data } from "../data/data.js";
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const div = document.getElementById("items");
//console.log(data);

const cargarData = (data) => {
  data.forEach((personaje) => {
    //recorrer arreglos o listas, los objetos no se recorren
    //console.log(personaje);
    const { id, name, image } = personaje; //desestructuracion de objetos y arrays llaves para objetos corchete para arreglos
    templateCard.querySelector("h5").textContent = name;
    templateCard.querySelector("img").setAttribute("src", image);
    templateCard.querySelector(".btn-dark").dataset.id = id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  div.appendChild(fragment);
};

document.addEventListener("DOMContentLoaded", cargarData(data));

items.addEventListener("click", (e) => {
  //console.log(e.target.classList.contains("btn-dark"));
  if (e.target.classList.contains("btn-dark")) {
      //console.log(e.target.dataset.id)
      let foundId = e.target.dataset.id;
      
      let personaje = data.find(personaxe => personaxe.id == foundId)
            console.log(personaje)//JSON.stringify cuando nos arroje el objeto puro envolvemos la variable en "JSON.stringify"
            localStorage.setItem('detalle',JSON.stringify(personaje));
            window.location.href = 'detail.html'
        }
});
