const mail = prompt()

const arrayMail = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com', 'topolino@gmail.com' ]

let checker = 0


for (let i = 0; i < arrayMail.length; i++) {

    if (mail == arrayMail[i]){
        checker = 1
    }

}

if (checker == 1) {
    console.log ('true')
} else  {
    console.log ('false')
}


