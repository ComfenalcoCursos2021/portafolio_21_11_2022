addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("https://comfenalcocursos.000webhostapp.com/portafolio_21_11_2022/api.php");
    let res = await peticion.text();
    document.querySelector("pre").innerHTML = res;
})