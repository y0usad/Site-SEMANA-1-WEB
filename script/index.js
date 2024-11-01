// codigo javascript para adicionar a navbar dinamicamente em todas as paginas.
const navbar= '<nav><ul class="navegacao metal"><li><a href="./">Home</a></li><li><a href="./form.html">Entre no Clube!</a></li><li><a href="./about.html">Sobre o Clube</a></li></ul></nav>'
document.body.insertAdjacentHTML("afterbegin", navbar)