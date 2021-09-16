let peso = document.querySelector('input.peso')
let altura = document.querySelector('input.altura')
let res = document.querySelector('div#res')

function docalc() {
    if (peso.value.length == 0 || altura.value.length == 0 ) {
        alert('[ERROR] Digite um valor valido!')
    } else {
        var ress = peso.value / (altura.value * altura.value)
        res.innerHTML = `Seu IMC é ${ress}! <br>`
        if (ress < 18.5) {
            document.querySelector('div#res').style.color = 'rgb(196, 183, 0)'
            res.innerHTML += 'SEU PESO ESTA BAIXO !'
        } else if (ress < 24.9) {
            document.querySelector('div#res').style.color = 'rgb(74, 211, 47)'
            res.innerHTML += 'SEU PESO ESTA NORMAL !'
        } else if (ress < 29.9) {
            document.querySelector('div#res').style.color = 'rgb(214, 158, 2)'
            res.innerHTML += 'VOÇÊ ESTÁ ACIMA DO PESO !'
        } else if (ress < 34.9) {
            document.querySelector('div#res').style.color = 'rgb(255, 129, 25)'
            res.innerHTML += 'VOÇÊ ESTÁ COM OBESIDADE (GRAU I) !'
        } else if (ress < 39.9) {
            document.querySelector('div#res').style.color = 'rgb(238, 39, 99)'
            res.innerHTML += 'VOÇÊ ESTÁ COM OBESIDADE SEVERA (GRAU II) !'
        }else {
            document.querySelector('div#res').style.color = 'rgb(199, 0, 0)'
            res.innerHTML += 'VOÇÊ ESTÁ COM OBESIDADE MORBIDA (GRAU III) !'
        }
    }
        }
