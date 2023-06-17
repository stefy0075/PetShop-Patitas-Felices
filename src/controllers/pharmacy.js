import getData from "../modules/getData.js"
import {filterBySearch, renderCards} from "../modules/funciones.js"


document.addEventListener("DOMContentLoaded", async()=> {
    const activeSearch = document.getElementById('inputSearch')
    const containerCards = document.getElementById('conteinerCards')
    const datos = await getData("https://mindhub-xj03.onrender.com/api/petshop")
    const eventosFiltrados = datos.filter(event => event.categoria === "farmacia")
    console.log(eventosFiltrados)
    renderCards(containerCards, eventosFiltrados)
    
       
    activeSearch.addEventListener('input', (e) => {
        const valueSearch = document.getElementById("inputSearch").value
        console.log(valueSearch)
        const eventosFiltradosPorBusqueda = filterBySearch(eventosFiltrados, valueSearch)
        console.log(eventosFiltradosPorBusqueda)
        renderCards(containerCards, eventosFiltradosPorBusqueda, valueSearch)
})
})
