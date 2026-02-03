const boton= document.querySelector("#btnAgregar");
const input= document.querySelector("#tareaInput");
const tarea= document.querySelector("#listaTareas");

boton.addEventListener("click", (event) => {
    
    let texto= recibirTarea();

    if(texto != undefined) { //si no hay tarea impide que se cree el espacio para la tarea
        crearTarea(texto);
    }
    
});

/**
 * Recibe el texto que se introduce en el input y valida si está o no vacío.
 * Si es correcto lo devuelve.
 * @returns {String}
 */
function recibirTarea() {
    let texto;

        texto= input.value.trim();

        if(texto.length === 0) { //Comprueba si el texto está en blanco, si lo está corta la validación
            return;
        }

    return texto;
}

/**
 * Crea el elemento visual de una tarea
 * @param {text} text 
 */
function crearTarea(text) {
    const elemento= document.createElement("li");
    
    elemento.textContent= text;
    tarea.appendChild(elemento);

    elemento.addEventListener("click", () => {
        completado(elemento);
    });

    elemento.addEventListener("dblclick", () => {
        eliminarTarea(elemento);
    })

    input.value= "";
}

/**
 * Marca la tarea como completada
 * @param {elemento} elemento 
 */
function completado(elemento) {
    elemento.classList.toggle("completada");
}

/**
 * Se encarga de eliminar tareas de la lista
 * @param {elemento} elemento 
 */
function eliminarTarea(elemento) {
    elemento.remove();
}