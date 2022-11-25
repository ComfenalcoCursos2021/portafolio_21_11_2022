addEventListener("DOMContentLoaded", (e)=>{
    let url = "https://comfenalcocursos.000webhostapp.com/portafolio_21_11_2022/api.php";

    let menu = async()=>{
        let Myheader = new Headers();
        Myheader.set("accept", "CrearMenu");
        let config = {
            headers: Myheader, 
            method: "GET"
        };
        let peticion = await fetch(url,config);
        let res = await peticion.json();
        document.querySelector("#menu").innerHTML = res;
    }
    let secion = async()=>{
        let Myheader = new Headers();
        Myheader.set("accept", "CrearSection");
        let config = {
            headers: Myheader, 
            method: "GET"
        };
        let peticion = await fetch(url,config);
        let res = await peticion.json();
        document.querySelector("#datos").innerHTML = res;
    }

    Promise.all([menu(),secion()]);
    
}) 