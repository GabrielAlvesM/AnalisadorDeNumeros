let num = document.querySelector('input#num');
let tab = document.querySelector('select#numTab');
let res = document.querySelector('div#res')
let numbers = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
document.getElementById('add').addEventListener('click', addNum =>{
    if(isNumber(num.value) && !inlist(num.value, numbers)){
        numbers.push(Number(num.value))
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
        
    } else{
        throw new Error(alert('É necessário que um número seja digitado! Ou o valor já foi encontrado na lista!'));
        
    }
    num.value = ''
    num.focus();
})
document.getElementById('final').addEventListener('click', msg => {
    if(numbers.length == 0){
        throw new Error(alert('Você não pode finalizar pois valor está vazio!'))
    } else{
        let total = numbers.length;  
        let maior = numbers[0]
        let menor = numbers[0]
        let soma = 0;
        let media = 0;


        for(pos in numbers){
            soma += numbers[pos]
            if(numbers[pos] > maior){
                maior = numbers[pos]
            }
            if (numbers[pos] < menor){
                menor = numbers[pos]
            }
        }
        media = soma/total

        res.innerHTML = ''  
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }

})