function setup(){
  createCanvas(windowWidth, windowHeight);
}
function draw(){
  background(150);
  noStroke();
  for(let i = 0; i<14000; i++){
    rect(random(width), random(height), 2, 2);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botonesAgotado = document.querySelectorAll(".btn.agotado");
  const mensaje = document.getElementById("agotadoMsg");

  botonesAgotado.forEach(boton => {
    boton.addEventListener("click", (e) => {
      e.preventDefault(); // Para evitar navegación si hay un href

      mensaje.style.display = "block";

      setTimeout(() => {
        mensaje.style.display = "none";
      }, 2500);
    });
  });
});
