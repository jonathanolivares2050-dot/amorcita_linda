function abrirTarjeta(){
    document.querySelector(".card").style.display = "none";
    document.getElementById("contenido").style.display = "block";
}

function respuestaNo(){
    alert("❌ Error 404: Esa opción no está disponible 😜");
}

function respuestaSi(){
    document.getElementById("contenido").innerHTML = `
        <h2>¡Sabía que dirías que sí! 💕</h2>
        <img src="jaja.jpg" width="200">
    `;
}