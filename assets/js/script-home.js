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
 


