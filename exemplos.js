Exercicio 1 
function contarUnicos(array) {
  const semRepetidos = [...new Set(array)];
  console.log(`   Array sem repetição: [${semRepetidos}]`);
  return semRepetidos.length;
}

testar(
  "Exercício 1 - contarUnicos",
  contarUnicos([1, 2, 2, 3, 4, 4, 4, 5]),
  5
);



/* ============================================================
   EXERCÍCIO 2 - encontrarRepetidos
   ============================================================ */
function encontrarRepetidos(array) {
  const vistos = new Set();
  const repetidos = new Set();

  for (const elemento of array) {
    if (vistos.has(elemento)) {
      repetidos.add(elemento);
    } else {
      vistos.add(elemento);
    }
  }

  return [...repetidos];
}

testar(
  "Exercício 2 - encontrarRepetidos",
  encontrarRepetidos([1, 2, 2, 3, 4, 4, 4, 5]),
  [2, 4]
);



/* ============================================================
   EXERCÍCIO 3 - unirSemRepetir
   ============================================================ */
function unirSemRepetir(array1, array2) {
  const arrayJunto = [...array1, ...array2];
  return [...new Set(arrayJunto)];
}

testar(
  "Exercício 3 - unirSemRepetir",
  unirSemRepetir(["Ana", "Bruno", "Carlos"], ["Bruno", "Diana", "Ana"]),
  ["Ana", "Bruno", "Carlos", "Diana"]
);



/* ============================================================
   EXERCÍCIO 4 - temRepetido
   ============================================================ 
function temRepetido(array) {
  return new Set(array).size < array.length;
}

testar(
  "Exercício 4 - temRepetido (sem repetido)",
  temRepetido([101, 102, 103]),
  false
);

testar(
  "Exercício 4 - temRepetido (com repetido)",
  temRepetido([101, 102, 101]),
  true
);
