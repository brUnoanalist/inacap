 async function apiPerros(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data=await response.json();
    perros(data.message)
 }
 apiPerros()

 function perros(breedsLista){
    document.getElementById("breed").innerHTML = `
     <select onchange="cargaImg(this.value)">
            <option>Eliga un perro</option>
            ${Object.keys(breedsLista).map(function(breed){
                return `<option>${breed}</option>`
            }).join('')}
        </select>  
    `
 }
 async function cargaImg(breed){
    if (breed!="Eliga un perro"){
        const response= await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        fotoPerro(data.message)

    }

}
function fotoPerro(imagen){
    console.log(imagen)
    
    
    document.getElementById("foto").innerHTML = `
    <img src="${imagen[0]}" width="500" height="600">   `
}