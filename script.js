var objetos = Array('Cadeira', 'Impressora', 'Garfo');

function add() {
    var texto = document.getElementById('campo').value;

    if (texto != '') {
        if (objetos.indexOf(texto) !== -1) {
            alert('Objeto já foi adicionado');
        } else {
            objetos.push(texto);
            console.log(objetos);
            document.getElementById('campo').value = '';
        }
    }
}

function Ordenar() {
    objetos.sort();
    console.log(objetos);
}
