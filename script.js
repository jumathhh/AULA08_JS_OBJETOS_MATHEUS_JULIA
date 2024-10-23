//Trabalhando com objetos no JavaScript

//criar uma variavel do tipo obejto
let pessoa = {
    nome: "Deivid", 
    idade: 52,
    altura: 1.58,
    cargo: "estudante"
}
console.log(pessoa);
console.log(pessoa.nome);


let carro = {
    nome: "Siena",
    cor: "Branco",
    marca: "Fiat"
};
console.log(carro);
console.log(carro.nome+" "+ carro.cor);


//Criando um array de objetos
let alunos = [
    {nome:"Helo", CGM:168345000, turma:"2DS"},
    {nome:"Bernardo", CGM:168345111, turma:"2DS"},
    {nome:"Rogerio", CGM:168345222, turma:"2DS"}
];
console.log(alunos);
console.log(alunos[1]);
console.log(alunos[0].nome);