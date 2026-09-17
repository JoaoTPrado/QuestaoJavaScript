var cliques = 0;
var numeroCliques = document.getElementById('numeroCliques');

document.getElementById('btnClique').addEventListener('click', function() {
    cliques = cliques + 1;
    numeroCliques.textContent = cliques;
});

document.getElementById('btnZerar').addEventListener('click', function() {
    cliques = 0;
    numeroCliques.textContent = cliques;
});