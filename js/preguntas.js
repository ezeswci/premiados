// JavaScript Document
window.ptosAcumulados=0;
window.preguntas=new Array();
window.elegidas=new Array();
window.onload=cargarPreguntas();
window.opcionActual; 
window.puntosActual;

function cargarPreguntas(){
	window.preguntas[0]={val:5, op0:"¿Cuál es el país menos turístico de Europa?", op1:"Armenia",  op2:"Moldavia", op3:"Liechtenstein", op4:"Hungría",opT:3};
	window.preguntas[1]={val:15, op0:"¿A qué país pertenece la isla de Tasmania?", op1:"Estados Unidos",  op2:"Australia", op3:"Portugal", op4:"Ninguna es correcta",opT:2};
	window.preguntas[2]={val:7, op0:"¿En cuál de los siguientes países NO hay ningún desierto?", op1:"España",  op2:"Chile", op3:"Mongolia", op4:"Alemania",opT:4};
	window.preguntas[3]={val:12, op0:"¿Cuál es el código internacional para Cuba?", op1:"CA",  op2:"CU", op3:"CB", op4:"Ninguna es correcta",opT:2};
	window.preguntas[4]={val:18, op0:"¿Cuál es la capital del estado de Arkansas?", op1:"Kansas",  op2:"Little Rock", op3:"Hot Springs", op4:"Washington",opT:2};
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
	window.opcionActual=pregunta.opT;
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
	if(opcion==window.opcionActual){
		eligioCorrecto(opcion);
	}else{
		eligioMal(opcion);
	}
}
function eligioCorrecto(opcion){
	//alert(opcion);
	//alert(window.opcionActual);
	document.getElementById("op"+opcion).className="opcion correcta";
	window.ptosAcumulados=window.ptosAcumulados+window.puntosActual;
	//alert("puntos totales:"+window.ptosAcumulados);
	setTimeout(function(){document.getElementById("op"+opcion).className="opcion";jugarRonda();},3000);
}
function eligioMal(opcion){
	//alert(opcion);
	//alert(window.opcionActual);
	document.getElementById("op"+window.opcionActual).className="opcion correcta";
	document.getElementById("op"+opcion).className="opcion incorrecta";
	//alert("puntos totales:"+window.ptosAcumulados);
	setTimeout(function(){document.getElementById("op"+opcion).className="opcion";document.getElementById("op"+window.opcionActual).className="opcion";terminarRonda();},3000);
}
function terminarRonda(){
	window.db.transaction(terminarRondaEx, errorMon);
}
function terminarRondaEx(tx) {
    tx.executeSql("UPDATE RONDA SET ro_monedas ='"+window.ptosAcumulados+"'  WHERE rowid =1  ;", [],   updateMon, errorMon);
}
function updateMon(){
	window.location='preguntas_final.html';
}
function errorMon(){
}