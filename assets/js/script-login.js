let btn = document.querySelector('#btnAcao');

btn.addEventListener('click', function () {
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#password').value;

    if (email == 'dmrramaral@gmail.com' && senha == '123') {

        document.querySelector('.popUpLogin').insertAdjacentHTML(
            "afterbegin",
            '<div class="confirmLogin">USUÁRIO LOGADO COM SUCESSO</div>'

        )

    }
    else {
        document.querySelector('.popUpLogin').insertAdjacentHTML(
            "afterbegin",
            '<div class="errorLogin"><span>USUÁRIO OU SENHA INCORRETOS</span> </div>'
        )
        email = document.querySelector('#email').value = '';
        senha = document.querySelector('#password').value = '';


    }



}
);

