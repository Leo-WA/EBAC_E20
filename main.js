const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 7 },
    { nome: "José", nota: 6 },
    { nome: "Pedro", nota: 4 }
];

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));
