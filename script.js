function adicionarEtapa() {
  const novaEtapa = prompt("Type a step for your journey:");
  if (novaEtapa) {
    const lista = document.getElementById("lista-aprendizado");
    const item = document.createElement("li");
    item.textContent = `🚀 ${novaEtapa}`;
    lista.appendChild(item);
  }
}
