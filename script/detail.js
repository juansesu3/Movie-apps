let h1 = document.querySelector('h1');
let img = document.querySelector('img');
let button = document.querySelector('.btn-dark');

const getLocalStorage = () =>{
    let detalle = JSON.parse(localStorage.getItem('detalle'));
    console.log(detalle);
    const {name,image} = detalle;
    h1.textContent = name;
    img.setAttribute('src',image);
}

document.addEventListener('DOMContentLoaded',getLocalStorage);


button.addEventListener('click',() => {
    window.location.href = 'index.html';
})