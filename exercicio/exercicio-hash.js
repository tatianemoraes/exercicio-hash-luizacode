/*
* exercicio -> implementem hash usando outra função hash
* usando criatividade - hash com colisão
*/

let arrayHash = new Array();
let words = ["Luiza", "Luna", "Bia", "Luana"];

function HashGeneratorPower(word) {
    // math.floor -> arredonda para baixo
    // math.random -> usado para gerar número randômico
    let hashGenerator = Math.floor(Math.random() * 256);
    const foundHash = arrayHash.find(hash => hash === hashGenerator);
    if(foundHash) {
        hashGenerator++;
    }
    return hashGenerator;
}


words.forEach(function(value, index) {
    let indexHash = HashChangePower(value);
    arrayHash[indexHash] = value;
    console.log(arrayHash);
});
