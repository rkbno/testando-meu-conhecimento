localStorage.promptName = prompt('Qual seu nome?')
const msg = document.getElementById('msg')
const img = document.getElementById('imagem')

function carregar () {
    const data = new Date()
    const hora = data.getHours()
    const promptName = localStorage.promptName
    if (hora >= 0 && hora < 12) {
        img.src = '/src/imagens/manhã.jfif'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = 'Bom dia ' + localStorage.promptName
    } 
    else if(hora >= 12 && hora < 18) {
        img.src = '/src/imagens/tarde.jfif'
        document.body.style.background = '#b9846e'
        msg.innerHTML =  'Boa tarde ' + localStorage.promptName
    }
     else {
        img.src = '/src/imagens/noite.jfif'
        document.body.style.background = '#515151'
        msg.innerHTML = 'Boa Noite ' + localStorage.promptName
    }

}



carregar();