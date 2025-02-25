// const form = document.getElementById('form-contato');
// const contatos = []
// const telefones = []

// linhas = '';

// form.addEventListener('submit', function (e) {
//     e.eventDefault();

//     adicionarLinha();
//     atualizarTabela();
// })

// function adicionarLinha() {
//     const inputContato = document.getElementById('contato');
//     const inputTelefone = document.getElementById('telefone');

//     if (contatos.includes(inputContato.value)) {
//         alert(`O contato: ${inputContato.value} Já foi inserido`);
//     } else {
//         contatos.push(inputContato.value);
//         telefones.push(parseFloat(inputTelefone.value));

//         let linha = '<tr>';
//         linha += `<td>${inputContato.value}</td>`;
//         linha += `<td>${inputTelefone.value}</td>`;
//         linha += '</tr>'

//         linhas += linha;
//     }
//     inputContato.value = '';
//     inputTelefone.value = '';
// }

// function atualizarTabela() {
//     const corpoTabela = document.querySelector('tbody');
//     corpoTabela.innerHTML = linhas;
// }

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