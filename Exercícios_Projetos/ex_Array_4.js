let frutas = [
  "maçã",
  "banana",
  "laranja",
  "maçã",
  "uva",
  "banana",
  "abacaxi",
  "melancia",
  "laranja",
  "pera",
  "kiwi",
  "uva",
  "morango",
  "melancia",
  "abacaxi"
];

let semDuplicatas = [];

function executarPrograma(){
    semDuplicatas = frutas.filter((item, index) => {
      return frutas.indexOf(item) === index
    });

    console.log(semDuplicatas);
}

executarPrograma();