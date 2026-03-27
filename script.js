let habilidades = ["HTML", "CSS", "Git", "SQL", "JavaScript"]

let lista = document.querySelector(".habilidades-lista")
lista.innerHTML = ""

habilidades.forEach(function(habilidade) {
  let item = document.createElement("li")
  item.textContent = habilidade
  item.classList.add("habilidade-item")
  lista.appendChild(item)
})