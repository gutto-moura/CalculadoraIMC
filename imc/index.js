let inputPeso = document.querySelector('#peso');
let inputAltura = document.querySelector('#altura');
let buttonCalcular = document.getElementById('calcular');
let resultadoImc = document.querySelector('#resultado-imc');
let grauObesidade = document.querySelector('#grau-obesidade');


buttonCalcular.addEventListener('click',() => {
    if((inputPeso !== "") && (inputAltura !== "")){
        let calcImc = (Number(inputPeso.value) / (Number(inputAltura.value) * Number(inputAltura.value))).toFixed(1);
            if(calcImc < 18.5){
                document.getElementById('resultado-imc').innerHTML = `Seu IMC é: ${calcImc}`;
                document.getElementById('grau-obesidade').innerHTML = `VOCÊ ESTA ABAIXO DO PESO`;
                //console.log(`Seu IMC é: ${calcImc} - VOCÊ ESTA ABAIXO DO PESO`);
            }else if((Number(calcImc >= 18.5)) && (Number(calcImc <= 24.9))){
                document.getElementById('resultado-imc').innerHTML = `Seu IMC é: ${calcImc}`;
                document.getElementById('grau-obesidade').innerHTML = `VOCÊ ESTÁ NO PESO NORMAL`;
                //console.log(`Seu IMC é: ${calcImc} - VOCÊ ESTÁ NO PESO NORMAL`);
            }else if((Number(calcImc >= 25)) && (Number(calcImc <= 29.9))){
                document.getElementById('resultado-imc').innerHTML = `Seu IMC é: ${calcImc}`;
                document.getElementById('grau-obesidade').innerHTML = `VOCÊ ESTÁ COM SOBREPESO`;
                //console.log(`Seu IMC é: ${calcImc} - VOCÊ ESTÁ COM SOBREPESO`);
            }else if((Number(calcImc >= 30)) && (Number(calcImc <= 34.9))){
                document.getElementById('resultado-imc').innerHTML = `Seu IMC é: ${calcImc}`;
                document.getElementById('grau-obesidade').innerHTML = `VOCÊ ESTÁ COM OBESIDADE GRAU I`;
                //console.log(`Seu IMC é: ${calcImc} - VOCÊ ESTÁ COM OBESIDADE GRAU I`);
            }else if((Number(calcImc >= 35)) && (Number(calcImc <= 39.9))){
                document.getElementById('resultado-imc').innerHTML = `Seu IMC é: ${calcImc}`;
                document.getElementById('grau-obesidade').innerHTML = `VOCÊ ESTÁ OBESIDADE GRAU II`;
                //console.log(`Seu IMC é: ${calcImc} - VOCÊ ESTÁ OBESIDADE GRAU II`);
            }else if((Number(calcImc >= 40))){
                document.getElementById('resultado-imc').innerHTML = `Seu IMC é: ${calcImc}`;
                document.getElementById('grau-obesidade').innerHTML = `VOCÊ ESTÁ COM OBEDIDADE GRAU III OU MORBIDA`;
                //console.log(`Seu IMC é: ${calcImc} - VOCÊ ESTÁ COM OBEDIDADE GRAU III OU MORBIDA`);
            }
        }
});