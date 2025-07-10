const lista_de_tarefas = []
const texto = document.getElementById('texto')

while (true) {
    const escolha = prompt('1- Adicionar  2- Remover  3- Listar  4- Concluir')

    if (escolha === '1'){
        const tarefa = prompt('Digite o nome da tarefa')
        lista_de_tarefas.push(tarefa)
    
    }else if (escolha === '2'){
        const tarefa_excluir = Number(prompt('Digite o índice da tarefa que deseja excluir: '))
        alert(`Você excluiu o ${lista_de_tarefas[tarefa_excluir]} `)
        lista_de_tarefas.splice(tarefa_excluir, 1)

    }else if (escolha === '3'){
        let indice = 0 
        for(i of lista_de_tarefas){
            texto.innerHTML += `<p>${indice} - ${i}</p>`
            indice++
        }
        break
    }else if(escolha === '4'){
        const tarefa_concluida = Number(prompt('Digite o índice da tarefa que você concluiu: '))
        alert(`Tarefa ${lista_de_tarefas[tarefa_concluida]} concluída `)
        lista_de_tarefas.splice(tarefa_concluida, 1)
    }else{
        alert('Escolha um entre 1, 2, 3 e 4, somente!')
    }
}
