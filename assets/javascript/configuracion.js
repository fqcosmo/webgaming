//Creamos un buscador en tiempo real recorriendo todos los elementos de una clase
document.addEventListener('keyup', e =>{
    //El metodo march o matches devuelve todas las ocurrencias de una expresión regular dentro de una cadena
    if(e.target.matches('#txtBuscar')){
        document.querySelectorAll('.articulos').forEach(elementos =>{
            //Usamos el metodo include
            elementos.textContent.toLowerCase().includes(e.target.value)
            //Usamos un operador ternario
            ? elementos.classList.remove('filtro')
            : elementos.classList.add('filtro');
        });
    }
});
