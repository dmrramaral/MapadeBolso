function validarCadastro(){
    if(validPassword() == true && criarCadastro() == true){
        return true;
    } else {
        return false;
    }
}


function criarCadastro(){
    let cadastro = document.forms.cadastro;

    if(cadastro.name.value == ''){
        alert('Nome obrigatório')
    } else if (cadastro.email.value == ''){
        alert('Email obrigatório')
    } 


}

function validPassword(){
    
    let password = document.querySelector('#password').value
    let confirmPassword = document.querySelector('#confirmPassword').value

    if(password == ''){
        alert('Senha obrigatória')
    }else if(password.length < 8){
        alert('Senha deve ter no mínimo 8 caracteres')
    } else if(password != confirmPassword){
        alert('As senhas não conferem')
    }
  
}

/* direcionamento de nav */


let contribua = document.querySelector('.bi-plus-circle-fill');

contribua.addEventListener('click', function () {
    window.location.href = "/paginas/cadastroMapa.html";
});

let home = document.querySelector('.bi-house-door');

home.addEventListener('click', function () {
    window.location.href = "/paginas/home.html";
});

let voltarPaginaLogin = document.querySelector('.bi-gear');
voltarPaginaLogin.addEventListener('click', function () {
    window.location.href = "/index.html";
});