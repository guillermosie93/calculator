let X//operando A
let Y//operando B
let sign//operador |+,-,*,/|

function clear(){//limpia el display
    $('#displayCalculator').text("")
}

function dlt(){//borra el ultimo caracter del num del display
    const num = $('#displayCalculator').text()
    const numDlt = num.substr(0, num.length - 1)
    $('#displayCalculator').text(numDlt)
}
function result(){//da el resultado
        Y = $('#displayCalculator').text()//almacena el num en la variable Y 
        const cuenta = X + sign + Y //concatena ambos num num y el signo
        const resto = eval(cuenta)//realiza la cuenta
        clear()//limpia  display para mostrar eñ resultado
        $('#displayCalculator').text(resto)//muestra el resultado
    
}
function writeNum(e){//concqtena y muestra el num en el display
    const numX = e.target.id//obtiene el valor del boton
    const display0 = $('#displayCalculator').text()//almacena el numero que se va formando 
    const result = $('#displayCalculator').text(display0 + numX)//devuelve el numero concatenado
}

function operando(e){//recibe el operador 
    sign = e.target.id //almacema el operador en la variable
    X = $('#displayCalculator').text()//almacena el numero final correspondiente al operando A
    clear()//limpia el display para el prox operando
}

function reproducir(){
    $('#sonido').attr('src', 'bip.mp3')
    document.querySelector('#sonido').play()
}




const x = document.querySelector('.btn--number')

$('.btn--operation').on('click', operando)

$('.btn--number').on('click', writeNum)

$('.btn--result').on('click', result)

$('#ce').on('click', clear)

$('#del').on('click', dlt)

$('.btn').on('click', reproducir)