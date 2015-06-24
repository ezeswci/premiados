// JavaScript Document
window.preguntas=new Array();
window.elegidas=new Array();
window.onload=cargarPreguntas();
window.opcionActual; 
window.puntosActual;

function cargarPreguntas(){
	window.preguntas[0]={val:20, op0:"¿cual es su hamburguesa preferida en mc donald's?", op1:"Cuarto de Libra",  op2:"Con Queso", op3:"Big-Mac", op4:"Me dan lo mismo",opT:3};
	window.preguntas[1]={val:20, op0:"¿cual es su Fiat preferido?", op1:"Punto",  op2:"Uno", op3:"Palio", op4:"Me dan lo mismo",opT:3};
	window.preguntas[2]={val:20, op0:"¿cual es su Fiat preferido?", op1:"Punto",  op2:"Uno", op3:"Palio", op4:"Me dan lo mismo",opT:3};
	window.preguntas[3]={val:20, op0:"¿cual es su Fiat preferido?", op1:"Punto",  op2:"Uno", op3:"Palio", op4:"Me dan lo mismo",opT:3};
	window.preguntas[4]={val:20, op0:"¿cual es su Fiat preferido?", op1:"Punto",  op2:"Uno", op3:"Palio", op4:"Me dan lo mismo",opT:3};
	jugarRonda();
}
function jugarRonda(){
	opcion=Math.floor((Math.random() * 5));//alert(opcion);
	if(window.elegidas.length>=5){window.elegidas.length=0;}
	if(window.elegidas.indexOf(opcion)==-1){
		window.elegidas.push(opcion);
		cargarEnPantalla(opcion);
	}else{
		jugarRonda();
	}
}
function cargarEnPantalla(opcion){
	if(document.getElementById("op4")!=null){
	pregunta=window.preguntas[opcion];
	window.puntosActual=pregunta.val;
	document.getElementById("val_pr").innerHTML="Valor: "+pregunta.val+" Estrellas";
	document.getElementById("op0").innerHTML=pregunta.op0;
	document.getElementById("op1").innerHTML=pregunta.op1;
	document.getElementById("op2").innerHTML=pregunta.op2;
	document.getElementById("op3").innerHTML=pregunta.op3;
	document.getElementById("op4").innerHTML=pregunta.op4;
	}else{
		//alert("elemento no existe");
		setTimeout(function(){cargarEnPantalla(opcion);},50);
	}
	
}
function selectPregunta(opcion){
		eligioCorrecto(opcion);
}
function eligioCorrecto(opcion){
	//alert(opcion);
	//alert(window.opcionActual);
	document.getElementById("op"+opcion).className="opcion correcta";
	window.ptosAcumulados=parseInt(window.ptosAcumulados)+parseInt(window.puntosActual);
	//alert("puntos totales:"+window.ptosAcumulados);
	setTimeout(function(){document.getElementById("op"+opcion).className="opcion";terminarRonda();},3000);
}
function terminarRonda(){
	window.db.transaction(terminarRondaEx, errorMon);
}
function terminarRondaEx(tx) {
    tx.executeSql("UPDATE RONDA SET ro_monedas ='"+window.ptosAcumulados+"'  WHERE rowid =1  ;", [],   updateMon, errorMon);
}
function updateMon(){
	window.location='preguntas_final_acumulado.html';
}
function errorMon(){
}