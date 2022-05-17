let bntsFechar = document.querySelectorAll('.btn-fechar');
let btnListarPacientes = document.querySelector(".listar-pacientes")
let btnListarMedicos = document.querySelector('.listar-medicos');
let btnAdicionarConsulta = document.querySelector('.adicionar-consulta');

let modalListagemPacientes = document.querySelector('.modal-listagem--pacientes');
let modalListagemMedicos = document.querySelector('.modal-listagem--medicos');

btnListarPacientes.addEventListener('click', () => {
    if(modalListagemPacientes.classList.contains('hidden')) modalListagemPacientes.classList.remove('hidden')
});

btnListarMedicos.addEventListener('click', () => {
    if(modalListagemMedicos.classList.contains('hidden')) modalListagemMedicos.classList.remove('hidden')
});

bntsFechar.forEach(btn => btn.addEventListener('click', (e) => { 
    if(!e.target.parentElement.classList.contains('hidden')) e.target.parentElement.classList.add('hidden')}));