// querySelector = seletor de elementos
const check = document.querySelector("check")

// addEventListener = adiciona um  evento
check.addEventListener('click', mudaTema)

function mudaTema(){
    let body = document.querySelector("body")
    // let temaAtual = document.querySelector('#temaAtual')
    let imgLogo = document.querySelector('#imgLogo')

    if(check.checked){
        body.setAttribute('data-bs-theme','dark')
        // temaAtual.innerHTML = "Dark"
        imgLogo = setAttribute('src','images/logo/logoDark.svg')
    }else{
        body.setAttribute('data-bs-theme','lhigt')
        imgLogo = setAttribute('src','images/logo/logoWhite.svg')
        // temaAtual.innerHTML = "lhigt"

    }
}