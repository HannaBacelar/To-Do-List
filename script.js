let capturandoInput = document.querySelector("#texto-tarefa")
let capturaOl = document.querySelector("#lista-tarefas")
let capturaButton = document.querySelector("#criar-tarefa")



/**capturar o que está no innput */
capturaButton.addEventListener("click", lidaComInput)

function lidaComInput() {
    if ( capturandoInput.value !== '') {
      let criaLi = document.createElement("li")
      criaLi.innerText = capturandoInput.value
      capturaOl.appendChild(criaLi)
      capturandoInput.value = '';

    } 
}












