function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        img.src = '/src/imagens/manhã.jfif'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = 'Bom dia'
    } if (hora >= 12 && hora < 18) {
        img.src = '/src/imagens/tarde.jfif'
        document.body.style.background = '#b9846e'
        msg.innerHTML = 'Boa tarde'
    } else {
        img.src = '/src/imagens/noite.jfif'
        document.body.style.background = '#515151'
        msg.innerHTML = 'Boa Noite'
    }

}

function enviar () {
    var n = document.querySelector('input#txtn')
    var msg = document.querySelector('div#msg')

    if (n == 0 ) {
        alert('Coloque primeiro o seu nome!')
    }
}