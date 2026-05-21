

function login(){

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "1234"){

        document.getElementById("loginScreen").style.display = "none";

        document.getElementById("website").style.display = "block";

    }else{

        alert("Usuario o contraseña incorrectos");

    }

}

function showSection(id){

    let sections = document.querySelectorAll(".section");

    sections.forEach(section => {

        section.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

function cotizar(){

    let vehiculo = Number(document.getElementById("vehiculo").value);

    let motor = Number(document.getElementById("motor").value);

    let ia = Number(document.getElementById("ia").value);

    let total = vehiculo + motor + ia;

    document.getElementById("resultado").innerHTML =
    "Total: " + total.toLocaleString() + " créditos";

}

function registrar(){

    alert("Registro completado correctamente.");

}
