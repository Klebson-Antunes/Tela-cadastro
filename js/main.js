// mudar de tela login / cadastro
const botoes = document.querySelectorAll('.btn-tela');

const telaCadastro = document.querySelector('.cadastro');
const telaLogin = document.querySelector('.login');

for (let i = 0; i < botoes.length; i++) {
    const btn = botoes[i];
    btn.onclick = function () {
        verificaTela(telaCadastro, telaLogin, btn)
    }
}

//add e remove classe com display block
function removeAddClass (remove, add) {
    remove.classList.remove('desativado');
    add.classList.add('desativado');
}

//verifica o botão clicado e chama a função remove e add classe
function verificaTela (cadastro, login, btn) {
    const classe = btn.classList[1];

    if (classe === "btn__login"){
        removeAddClass(login, cadastro);
    } else if (classe === "btn__cadastrar") {
        removeAddClass(cadastro, login);
    }
}
