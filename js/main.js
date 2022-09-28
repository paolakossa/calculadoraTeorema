const botao = document.querySelector('.botao');

function calcularHipotenusa () {
	const a = document.querySelector('.aInput').value;
	const b = document.querySelector('.bInput').value;

	const resultado = document.querySelector('.texto');

	const hipotenusa = Math.round(Math.sqrt((a*a) + (b*b))); 

	resultado.innerHTML = hipotenusa;
}; 

botao.addEventListener('click', calcularHipotenusa); 

