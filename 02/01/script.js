
function validate(element) {

    // var error = document.getElementById('error');
    var error = element.nextElementSibling;
    error = error.nextElementSibling;
    
    if (element.value == "")
    {
        alert("O campo não pode ficar vazio.");

        element.style.backgroundColor = "red";
        element.style.color = "white";

        error.innerHTML = "Campo obrigatório.";
    }
    else if (element.value.length < 3)
    {
        alert("O campo deve conter ao menos 3 caracteres.");

        element.style.backgroundColor = "red";
        element.style.color = "white";

        error.innerHTML = "O campo deve conter ao menos 3 caracteres.";
    }
    else
    {
        element.style.backgroundColor = "white";
        element.style.color = "black";

        error.innerHTML = "Tudo ok!";
    }
}
