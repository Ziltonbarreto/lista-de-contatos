document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('contato').value;
    const phone = document.getElementById('telefone').value;

    const table = document.getElementById('tittle').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = name;
    cell2.textContent = phone;

    document.getElementById('form-contato').reset();
});