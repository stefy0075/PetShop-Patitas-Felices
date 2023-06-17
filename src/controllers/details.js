import getData from "../modules/getData.js"
document.addEventListener("DOMContentLoaded", async()=> {
const dato = await getData("https://mindhub-xj03.onrender.com/api/petshop")
 
const id = new URLSearchParams(location.search).get("id")
console.log(id)
const pets = dato.find(element => element._id == id)
console.log(pets)
const container = document.getElementById("conteneiner-details")
container.innerHTML +=`  <div class=" col-12 d-flex justify-content-center p-0 col-md-5">
    <img src=${pets.imagen} id="img-card" class="rounded imagen-details" alt="...">
</div>
<div class="col-12 p-0 d-flex justify-content-center col-md-5 pb-4" >
    <div class="contenedor-text">
        <div class="card-body d-flex flex-column align-items-center text-center">
            <h5 id="titulo-h5" class="card-title">${pets.producto}</h5> 
            <div class= "d-flex justify-content-evenly w-100">
            <p class="card-text"><b>Categoria:</b> ${pets.categoria}</p>
            <p class="card-text"><b>precio:</b> $${pets.precio}</p>
            <p class="card-text"><b>stock:</b> ${pets.disponibles}/u</p>
            </div>
            <p class="card-text">${pets.descripcion}</p>
        </div>
        <div class="contenerdor-button mt-4"><button class="button-details p-2">Agregar al carrito</button></div>
</div>`
})


