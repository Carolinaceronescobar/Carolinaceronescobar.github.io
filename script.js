document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que se recargue la página
    document.getElementById("formResponse").textContent = "¡Mensaje enviado con éxito!";
    this.reset(); // Limpia el formulario
});
