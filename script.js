function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = 23//data.getHours()
  msg.innerHTML = `Agora é  ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    img.src = "./imagens/manha.png"
    document.body.style.background = '#e2dc84dc'
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./imagens/tarde.jpg"
    document.body.style.background = '#d37673'
  } else {
    img.src = "./imagens/noite.jpg"
    document.body.style.background = '#181616'
  }
}