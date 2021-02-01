function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Usuario() {
    this.elemento = novoElemento('input', 'entrada')
    this.elemento.type = 'text'
    this.elemento.name = 'userid'

    var user = this.elemento.value
    window.onclick = () => console.log(user)
}

function build() {
    const tela = document.querySelector('[user]')

    const usuario = new Usuario()

    tela.appendChild(usuario.elemento)
}

new build()