//Capturar evento de submit do formulario
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const peso = (form.querySelector("#peso"));
  const altura = (form.querySelector("#altura"));

  const pesoValor =Number(peso.value);
  const alturaValor =Number(altura.value);

  if(!pesoValor){
    setResultado('Peso inválido', false)
    return;
  }
  if(!alturaValor){
    setResultado('Altura inválida', false)
    return;
  }

  const imc = calcularImc(pesoValor, alturaValor);
  const nivelImc = classificaImc(imc)

  const msg = `Seu IMC é ${imc} (${nivelImc})`;
  
  setResultado(msg, true)

  console.log(imc, nivelImc)


  function calcularImc(peso, altura){
    const imc =  peso / (altura * altura);
    return imc.toFixed(2);
  }
    
});

function classificaImc(imc){
  if(imc < 18.5){
    return "Abaixo do peso"
  }
  else if(imc >=18.5 && imc<=24.9){
    return "Peso normal"  
  }
  else if(imc>=25 && imc<=19.9){
    return "Sobrepeso"
  }
  else if(imc>=30 && imc<= 34.9){
    return "Obesidade grau 1"
  }
  else if( imc>=35 && imc<=39.9){
    return "Obesidade grau 2"

  }
  else if( imc>=40 ){
    return "Obesidade grau 3"
  }
}
 
function criaParagrf(className){
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML =  '';
  const p = criaParagrf();

  if (isValid){
    p.classList.add('paragrafo-resultado'); 
  } else {
    p.classList.add('bad');
  } 
  p.innerHTML= msg;
  resultado.appendChild(p);
}


