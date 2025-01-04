console.log("¡Entamos a la pagina!");

function bienvenido(){
    alert("¡Bienvenvenido a la Pagina de Perfil!");
}

function eliminar(elemento){
    //console.log(elemento);
    elemento.remove();
    confirm("¿Seguro que quieres cerrar sesion?");
    /*
    elemento.style.visibility = "hidden"; -> esconde
    */
}

function cambiar_texto(elemento_h1) {
    if(elemento_h1.innerText == "Profile") {
        elemento_h1.innerText = "Perfil";
    }else {
        elemento_h1.innerText = "Profile";
    }
}

function cambia_imagen(elemento_img) {
    elemento_img.src = "../img/gifSuperDog.gif";
    //elemento_img.style.backgroundImage = "url('image/nueva.jpg')";
}

function regresa_imagen(elemento_img){
    elemento_img.src = "images/fotocarnet.jpeg";
}

function editar_perfil(){
    let elemento_nombre = document.querySelector("#nombre");
    let elemento_parrafo = document.querySelector(".descripcion");

    elemento_nombre.innerText = "Diego Sepulveda";
    elemento_parrafo.innerHTML = "Estudiante de programacion. <br> Me gusta hacer deporte, comer y los viajes."

    //color: while;
    elemento_nombre.style.color = "white";
    //background-color: babyblue;
    elemento_nombre.style.backgroundColor = "gray";
    //camelCamel PascalCase
}

function busqueda(){
    let input = document.querySelector("#buscador");
    let valor = input.value; //valor que usuario escribio
    alert("Estas buscando: "+valor);
}

function cambiar_modo() {
    let tarjeta_usuario = document.querySelector(".user-card");

    //tarjeta_usuario.classList.add("dark-mode");
    if(tarjeta_usuario.classList.contains("darl-mode")) {
        tarjeta_usuario.classList.remove("dark-mode");
    } else {
        tarjeta_usuario.classList.add("dark-mode");
    }
}
