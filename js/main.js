const btnCalcular = document.querySelector('.btn-calcular');
const divResultado = document.querySelector('.resultado');
const salarioBruto = document.querySelector('#salarioBruto');
const valeRefeicao = document.querySelector('#valeRefeicao');
const valeTransporte = document.querySelector('#valeTransporte');
const planoSaude = document.querySelector('#planoSaude');
const outrosBeneficios = document.querySelector('#beneficios');


// função para converter os valores recebidos no input em number
const converterStringNumber = (valorString) => {
    let valorCoveter = valorString;
    let convertido = valorCoveter.replace(/\./g, "").replace(",", ".");
    return parseFloat(convertido);
}






const calcularSalarioClt = () => {
    const salarioConvertido = converterStringNumber(salarioBruto.value);

    const fgtsAnual = (salarioConvertido * 12) * 0.08;

}






// Calcular salario, função que será execultada no click do botão 
const calcularSalario = (e) =>  {
    e.preventDefault()

    const salarioConvertido = converterStringNumber(salarioBruto.value);
   
    if(salarioConvertido >= 1320) {
        divResultado.classList.add('mostrar-resultado')
        calcularSalarioClt()

    }
}

btnCalcular.addEventListener('click', calcularSalario)