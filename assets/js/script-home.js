/* // Seleciona todos os ícones de lixeira
let iconsTrash = document.querySelectorAll('.bi-trash');

// Adiciona um ouvinte de eventos a cada ícone de lixeira
iconsTrash.forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Obtém o elemento .box pai do ícone clicado e remove-o
        let boxToRemove = icon.closest('.box');
        if (boxToRemove) {
            boxToRemove.remove();
        }
    });
});
 */

let modais = document.querySelectorAll(".box");
let exclui = document.querySelectorAll(".bi-trash");

for (let i = 0; i < exclui.length; i++) {
    exclui[i].addEventListener("click", function (event) {
        if (!event.target.classList.contains(".bi-trash")) {
            modais[i].remove();
        }
    });
}
