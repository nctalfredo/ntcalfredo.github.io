function comprarCurso(nombreCurso) {
    alert("Has comprado el " + nombreCurso);
}

document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensaje enviado. Nos pondremos en contacto contigo pronto.");
});
