// 8. O que acontece se chamarmos uma função antes de declará-la? Teste e explique o seguinte código:


dizerOi();

function dizerOi() {
  console.log("Oi!");
}

// O que acontece? 
// Ele mostra "Oi!" no console.

// Por quê?
// Porque o JavaScript entende a função antes de chegar nela.
// Então, mesmo chamando antes, funciona.
