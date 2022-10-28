function verificar() {
    var nome = document.getElementById('nome').value
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 15) {
                //CRIANÇA
                img.setAttribute('src', 'imagensidade/jovem-menino.png')
            } else if (idade < 25) {
                //JOVEM
                img.setAttribute('src', 'imagensidade/jovem-garoto.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagensidade/homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagensidade/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                //CRIANÇA
                img.setAttribute('src', 'imagensidade/mulher-crianca.png')
            } else if (idade < 25) {
                //JOVEM
                img.setAttribute('src', 'imagensidade/mulher-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagensidade/mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagensidade/senhora.png')
            }
        }
        res.innerHTML = `Olá, ${nome}!`
        res.innerHTML += ` Vimos que você é ${gênero} e possui ${idade} anos`
        res.appendChild(img)
    }
    
}