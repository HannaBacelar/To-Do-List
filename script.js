let capturandoInput = document.querySelector("#texto-tarefa")
let capturaOl = document.querySelector("#lista-tarefas")
let capturaButton = document.querySelector("#criar-tarefa")



/**capturar o que está no innput */
capturaButton.addEventListener("click", lidaComInput)

function lidaComInput() {
    if (capturandoInput.value !== '') {
        let criaLi = document.createElement("li")
        criaLi.innerText = capturandoInput.value
        capturaOl.appendChild(criaLi)
        capturandoInput.value = '';
    }
}

capturaOl.addEventListener('click', aletaraCorDeFundo)
function aletaraCorDeFundo(event) {
    let filhosOl = capturaOl.children
    for (i = 0; i < filhosOl.length; i += 1) {
        filhosOl[i].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}













