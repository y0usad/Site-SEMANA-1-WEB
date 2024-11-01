// para pegar parametros da url
const urlParametros= new URLSearchParams(window.location.search)
// selecionando elementos na pagina e injetando os parametros da url que vieram da form
document.getElementById("name").textContent=urlParametros.get("name")
document.getElementById("email").textContent=urlParametros.get("email")
document.getElementById("seucarro").textContent=urlParametros.get("seucarro")
//console.log(urlParametros.get("name"))