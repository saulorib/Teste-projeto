function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./avatar-light.png")
    img.setAttribute("alt", "foto do professor azul")
  } else {
    //se tiver sem light mode, adicionar a imagem normal
    img.setAttribute("src", "./avatar.png")
    img.setAttribute("alt", "foto do professor amarela")
  }
}
