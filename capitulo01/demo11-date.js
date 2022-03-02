//meses comecam do 0
// const dataAniversario = new Date(2020, 0, 19);
// console.log(dataAniversario);

const hoje = new Date();
// console.log(hoje.toString());
// console.log(hoje.toLocaleString());
// console.log(hoje.toLocaleDateString());

// formato global recomendado!
console.log(hoje.toISOString())

//setando 5 dias ao dia
const dia = hoje.getDate();
// hoje.setDate(dia + 5);
// hoje.setHours(2, 30, 0);
// console.log(hoje);

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minutos: ${hoje.getMinutes()}
    Segundos: ${hoje.getSeconds()}
`)