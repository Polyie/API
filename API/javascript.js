const moeda = document.querySelector("#moeda");

const coinFlip = (pesquisa) => {
  const caminho = "http://flipacoinapi.com/json";
  //console.log(caminho);
  fetch(caminho)
    .then((callback) => {
      console.log
      return callback.json();
      
    })
    .then((data) => {
      console.log(data);
      console.log;
      let genMoeda = '"' + data.value + '"';
      moeda.innerHTML = genMoeda;
    })
    .catch((err) => {
      console.log(err);
    });
};
