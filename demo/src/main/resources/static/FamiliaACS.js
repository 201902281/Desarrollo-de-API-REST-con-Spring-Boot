const modoAdmin = () =>{
    let divForms = document.getElementById("formulario");
    divForms.className= divForms.className + " esconder";

    let divAdmin = document.getElementById("administrador");
    divAdmin.className= "container";

    let divMapaContraseña = document.getElementById("mapaContraseña");
    divMapaContraseña.className=""

    let divInfoPresentada = document.getElementById("infoPresentada");
    divInfoPresentada.className= "esconder";

    let alerta = document.getElementById("alerta-contraseña");
    alerta.className= "alert alert-danger esconder";

    let password = document.getElementById("contraseña");
    password.value = "";
}

const modoUsuario = () =>{
    let divForms = document.getElementById("formulario");
    divForms.className= "container";

    let divAdmin = document.getElementById("administrador");
    divAdmin.className= divForms.className + " esconder";

    let divInfoPresentada = document.getElementById("infoPresentada");
    divInfoPresentada.className= "esconder";

}

const insertContra = () =>{
    let password = document.getElementById("contraseña");
    if(password.value === "admin"){
        let divMapaContraseña = document.getElementById("mapaContraseña");
        divMapaContraseña.className="esconder"

        let divInfoPresentada = document.getElementById("infoPresentada");
        divInfoPresentada.className= "";

        eliminarInfo();
        getContactos();
        getAplicantes();
    }else{
        let alerta = document.getElementById("alerta-contraseña");
        alerta.className= "alert alert-danger";
    }
}



const getContactos = async () => {
    let contContactos;
    let request = await fetch("/contactos");
    if(request.status === 200){
        data = await request.json();
        entradas = data;
        contContactos = Object.keys(entradas).length;
        actualizarNumContactos(contContactos);
        for(let key in Object.keys(entradas)){
            addContacto(entradas[key]);
        }
    }else{
        alert("Error al enlazar con el endpoint de los contactos");
    }
}

const addContacto = (contact) =>{
    let contacto = contact;
    let div = document.createElement("div");
    div.innerHTML = "<h5>Empresa: " + contacto.empresa + " -- Identificador: " + contacto.id + "</h5> <ul class='list-unstyled'> <ul> <li>Nombre: " + contacto.nombre + "</li> <li>Correo Electrónico: " + contacto.correoElec + "</li> <li>Mensaje: "+ contacto.mensaje + "</li> </ul> </ul>";
    let div2 =document.getElementById("listaContactos");
    div2.insertAdjacentElement("beforeend",div);        
}



const getAplicantes = async () => {
    let contAplicantes;
    let request = await fetch("/aplicantes");
    if(request.status === 200){
        data = await request.json();
        entradas = data;
        contAplicantes = Object.keys(entradas).length;
        actualizarNumAplicantes(contAplicantes);
        for(let key in Object.keys(entradas)){
            addAplicante(entradas[key]);
        }
    }else{
        alert("Error al enlazar con el endpoint de los aplicantes");
    }
}


const addAplicante = (aplicante) =>{
    let div = document.createElement("div");
    div.innerHTML = "<h5>Nombre: " + aplicante.nombre + "  -- Identificador: " + aplicante.id +"</h5> <ul class='list-unstyled'> <ul> <li>Sexo: " + aplicante.sexo + "</li> <li>Edad: " + aplicante.edad + "</li> <li>Numero de teléfono: " + aplicante.telef + "</li> <li>Correo Electrónico: " + aplicante.correo + "</li> <li>Disponibilidad: " + aplicante.dispon + "</li> <li>Departamento: " + aplicante.depart + "</li> <li>Fecha de incorporación: " + aplicante.fecha + "</li></ul></ul>";
    let div2 =document.getElementById("listaAplicantes");
    div2.insertAdjacentElement("beforeend",div);        
}

const eliminarInfo = () => {
    let div1 = document.getElementById("listaContactos");
    let div2 = document.getElementById("listaAplicantes");
    div1.innerHTML="";
    div2.innerHTML="";
}



const postContacto = async () => {
    let seleccion = document.getElementById("seleccionEmpresa");
    let pro = seleccion.options[seleccion.selectedIndex].value;

    let request = await fetch("/contactos", {
        method: "POST",
        body: JSON.stringify({
            id: 0,
            empresa: pro,
            nombre: document.getElementById("nombreContacto").value,
            correoElec: document.getElementById("email").value,
            mensaje: document.getElementById("mensaje").value
        }),
        headers: {
            "Content-Type": "application/json",
        },
        dataType: "json",
    });

    if(request.status === 200){
        getContactos();
    }else{
        alert("No hemos podido subir la información proporcionada al servidor de contactos");
    }
}


const postAplicacion = async () => {
    let cadenaSexo = "";
    let cadenaDispon = "";
    let cadenaDep = "";
    let opcionesSexo = document.getElementsByName('sexo');
    for(let i=0; i < opcionesSexo.length;i++){
        if (opcionesSexo[i].checked) {
            cadenaSexo = cadenaSexo + "   " +opcionesSexo[i].value;
        }    
    }
    let opcionesDispo = document.getElementsByName('disponibilidad');
    for(let i=0; i < opcionesDispo.length;i++){
        if (opcionesDispo[i].checked) {
            cadenaDispon = cadenaDispon + "   " +opcionesDispo[i].value;
        }   
    }
    let opcionesDep = document.getElementsByName('departamento');
    for(let i=0; i < opcionesDep.length;i++){
        if (opcionesDep[i].checked) {
            cadenaDep = cadenaDep + "   " + opcionesDep[i].value;
        }   
    }

    console.log("cadenaSexo");

    let request = await fetch("/aplicantes", {
        method: "POST",
        body: JSON.stringify({
            "id": 0,
            "nombre": document.getElementById("nombreTrabajo").value,
            "sexo": cadenaSexo,
            "edad": document.getElementById("edad").value,
            "telef": document.getElementById("telefono").value,
            "correo": document.getElementById("emailTrabajo").value,
            "dispon": cadenaDispon,
            "depart": cadenaDep,
            "fecha": document.getElementById('start').value
        }),
        headers: {
            "Content-Type": "application/json",
        },
        dataType: "json",
    });

    if(request.status === 200){
        getAplicantes();
    }else{
        alert("No hemos podido subir la información proporcionada al servidor de aplicación");
    }
}

const actualizarNumAplicantes = (aplicantes) => {
    let contAplicantes = aplicantes;
    let alerta = document.getElementById("alertaAplicacion");
    alerta.textContent =   "Numero de formularios de aplicacion enviados con exito: " + contAplicantes; 
}
const actualizarNumContactos = (contactos) => {
    let contContactos = contactos;
    let alerta = document.getElementById("alertaContacto");
    alerta.textContent =   "Numero de formularios de contacto enviados con exito: " + contContactos; 
}

const imprCadena = () => {
    let cadenaDep = "";
    let opcionesDep = document.getElementsByName('departamento');
    for(let i=0; i < opcionesDep.length;i++){
        if (opcionesDep[i].checked) {
            console.log(i);
            cadenaDep = cadenaDep + "   " + opcionesDep[i].value;
        }   
    }
    console.log(cadenaDep);
}


const elimContacto = async () =>{
    let valor = document.getElementById("contactoElim").value;
    let request = await fetch("/contactos/" + valor, {
        method: "DELETE",
        credentials: "same-origin",
    });
    if(request.status === 204){
        eliminarInfo();
        getAplicantes();
        getContactos();
    }
    else if(request.status === 400){
        alert("Identificador no encontrado");
    }
    else{
        alert("No hemos podido conectar con el servidor para eliminar el contacto");
    }
}

const elimAplicante = async () =>{
    let valor = document.getElementById("aplicElim").value;
    let request = await fetch("/aplicantes/" + valor, {
        method: "DELETE",
        credentials: "same-origin",
    });
    if(request.status === 204){
        eliminarInfo();
        getAplicantes();
        getContactos();
    }
    else if(request.status === 400){
        alert("Identificador no encontrado");
    }
    else{
        alert("No hemos podido conectar con el servidor para eliminar el aplicante");
    }
}

getAplicantes();
getContactos();



