// JavaScript Document
//window.onload=cambiarImagen();
window.onload=setInterval(function () {cambiarImagen();}, 5000);
	function cambiarImagen(){
		playAnimation("img_ppal", "anOcultarMostrar4por10");
		opcion=Math.floor((Math.random() * 6)+1);//alert(opcion);
		setTimeout(function(){
		
		valor=document.getElementById("img_ppal").src;
		largo=valor.length;
		dir=valor.substr(0,(largo-5))+opcion+'.jpg';
		document.getElementById("img_ppal").src=dir;},2000);
		
	}
	function playAnimation(elementid, classAnimation){
	var element=document.getElementById(elementid);
	if(element.classList.contains(classAnimation)){ 
	//No deberia por que repetirse pero si llega a estar repetida la borra
	element.classList.remove(classAnimation);
	}else{
		element.classList.add(classAnimation);
	}
	// Le pongo un Listener para cada tipo de navegador
	element.addEventListener("webkitAnimationEnd", function(){element.classList.remove(classAnimation);}, false);
	element.addEventListener("animationend", function(){element.classList.remove(classAnimation);}, false);
	element.addEventListener("oanimationend", function(){element.classList.remove(classAnimation);}, false);
	element.addEventListener("MSAnimationEnd", function(){element.classList.remove(classAnimation);}, false);
}