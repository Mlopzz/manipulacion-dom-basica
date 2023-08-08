const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#result');


// form.addEventListener('submit',sumarInputValues);

// function sumarInputValues(event){
//     event.preventDefault();
//     const Resultado = parseInt(input1.value) + parseInt(input2.value);
//     p.innerHTML = "El Resultado es " +  Resultado;
// }

btn.addEventListener('click',sumarInputValues);

function sumarInputValues(event){
    const Resultado = parseInt(input1.value) + parseInt(input2.value);
    p.innerHTML = "El Resultado es " +  Resultado;
}

 