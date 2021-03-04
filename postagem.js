// fazer requisição da url
function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}
// function utilizada para imprimir os dados na tabela
function criaLinha(usuario) {
  linha = document.createElement("tr");
  tduserid = document.createElement("td");
  tdid = document.createElement("td");
  tdtitle = document.createElement("td");
  tdbody = document.createElement("td");
  tduserid.innerHTML = usuario.userId
  tdid.innerHTML = usuario.id
  tdtitle.innerHTML = usuario.title
  tdbody.innerHTML = usuario.body

  linha.appendChild(tduserid);
  linha.appendChild(tdid);
  linha.appendChild(tdtitle);
  linha.appendChild(tdbody);

  return linha;
}
//function main utilizada para buscar os dados da api
function main() {
  let data=fazGet("https://jsonplaceholder.typicode.com/posts");
  let usuarios = JSON.parse(data);
  let tabela = document.getElementById("tabela");
  usuarios.forEach(element => {
      let linha = criaLinha(element);
      tabela.appendChild(linha);
  });
  // Para cada usuario
      // criar uma linha
      // adicionar na tabela
}
main ()