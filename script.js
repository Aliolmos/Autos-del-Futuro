

function login(){ // funcion para iniciar sesion

    let user = document.getElementById("user").value; //obtiene el valor por escrito en el input con id "user"
    let pass = document.getElementById("pass").value; //obtiene el valor por escrito en el input con id "pass"

    if(user === "admin" && pass === "1234"){ // para verificar si el usuario y contraseña son correctos

        document.getElementById("loginScreen").style.display = "none"; //oculta la pantalla de inicio

        document.getElementById("website").style.display = "block"; //muestra la pagina principal

    }else{ //si los datos son incorrectos, les salta una alerta de que pusieron mal la contra

        alert("Usuario o contraseña incorrectos"); //muestra ese mensaje

    }

}

function showSection(id){ //funcion para mostrar las secciones del sitio

    let sections = document.querySelectorAll(".section"); //selecciona todos los elementos con la clase "section" y los guarda en la variable "sections"    

    sections.forEach(section => { //recorre cada elemento de "sections" y ejecuta la función para cada uno

        section.classList.remove("active"); //elimina la clase "active" de cada sección para ocultarlas

    });

    document.getElementById(id).classList.add("active"); //agrega la clase "active" a la sección con el id que se le pasó como argumento para mostrarla

}

function cotizar(){ //funcion para calcular el total de la cotizacion

    let vehiculo = Number(document.getElementById("vehiculo").value); //obtiene el valor por escrito en el input con id "vehiculo" y lo convierte a numero
 
    let motor = Number(document.getElementById("motor").value);//obtiene el valor por escrito en el input con id "motor" y lo convierte a numero

    let ia = Number(document.getElementById("ia").value);   //obtiene el valor por escrito en el input con id "ia" y lo convierte a numero

    let total = vehiculo + motor + ia; //suma los valores de vehiculo, motor e ia para obtener el total de la cotizacion

    document.getElementById("resultado").innerHTML = //muestra el resultado de la cotizacion en el elemento con id "resultado" y lo formatea con toLocaleString para agregar comas como separadores de miles
    "Total: " + total.toLocaleString() + " créditos"; //agrega el texto "Total: " antes del resultado y " créditos" después del resultado para mostrarlo de manera clara al usuario

}

function registrar(){ //funcion para registrar un nuevo usuario

    alert("Registro completado correctamente."); //muestra una alerta indicando que el registro se ha completado correctamente

}
