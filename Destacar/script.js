const input = document.getElementById('nomeInput');
const itens = document.querySelectorAll('#listaNomes li');

function atualizarDestaque() {
    const valor = input.value.trim();
    itens.forEach(function(item) {
        if (valor !== '' && item.textContent === valor) {
            item.classList.add('destaque');
        } else {
            item.classList.remove('destaque');
        }
    });
}

input.addEventListener('input', atualizarDestaque);
