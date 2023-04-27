const boton = document.querySelector("#boton");
const genero = "niño"; // Reemplaza "niño" por el género del gemelo que ya conoces

boton.addEventListener("click", () => {
  const body = document.querySelector("body");
  
  // Deshabilitar el botón para evitar múltiples clics
  boton.disabled = true;
  
  // Contador de 5 segundos
  let tiempoRestante = 5;
  const intervalo = setInterval(() => {
    boton.innerHTML = `Revelando género en ${tiempoRestante--} segundos...`;
    if (tiempoRestante < 0) {
      clearInterval(intervalo);
      
      if (genero === "niño") {
        body.style.backgroundColor = "lightblue";
      
        Swal.fire({
          title: '¡ES UN NENE!',
          text: "El otro todavia no sabemos, vuelva pronto",
          imageUrl: 'https://i.ibb.co/kXm5QyZ/Whats-App-Image-2023-04-27-at-15-44-07.jpg',
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Imagen de saludo'
        });
      } else {
        body.style.backgroundColor = "pink";
        swal("¡Es una niña!", "", "success");
      }
    }
  }, 1000);

});
