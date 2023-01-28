var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;
// OU ASSIM
var td_altura = paciente.querySelector(".info-altura");
var altura = td_altura.textContent;

var td_imc = paciente.querySelector(".info-imc");
var imc = peso/(altura*altura);

var pesoValido = false;
var alturaValida = false;

if (peso <= 0 || peso >= 1000) {    // TESTE PESO #####
    console.log("Peso inválido!");
    td_imc.textContent = "Peso inválido";
} else{
    console.log("Peso verificado!")
    pesoValido = true;
}

if (altura <= 0 || altura >= 3) {   // TESTE ALTURA #####
    console.log("Altura inválida!");
    td_imc.textContent = "Altura inválida";
} else{
    console.log("Altura verificada!")
    alturaValida = true;
}

if (pesoValido == true && alturaValida == true) {   // IMC #####
    td_imc.textContent = imc;
}

/* isNaN(td_imc.textContent)
if {
    td_imc.textContent = "Dados inválidos"
}
*/