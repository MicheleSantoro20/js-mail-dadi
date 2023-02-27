console.log ('VINCE CHI HA IL NUMERO PIU ALTO')
const user = Math.floor(Math.random() * 6) + 1;
console.log( 'Il tuo numero è: ' + user )
const computer = Math.floor(Math.random() * 6) + 1;
console.log( 'Il numero del tuo avversario è: ' + computer )

console.log ('VINCE CHI HA IL NUMERO PIU ALTO')

if (user > computer) {
    console.log('Hai vinto')
} else if (user < computer){
    console.log('Hai perso')
} else {
    console.log('Pareggio')
}

