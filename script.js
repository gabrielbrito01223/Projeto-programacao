function adicionarEtapa() {
  const novaEtapa = prompt("Digite a nova etapa da sua jornada:");
  if (novaEtapa) {
    const lista = document.getElementById("lista-aprendizado");
    const item = document.createElement("li");
    item.textContent = `🚀 ${novaEtapa}`;
    lista.appendChild(item);
  }
}
