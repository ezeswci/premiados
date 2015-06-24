// JavaScript Document
$(document).ready(onDeviceReady);

//Global database
//
window.db;

// PhoneGap is ready
//
function onDeviceReady() {
    var dbSize = 200000;
    var dbName = "PRE";
    var dbVersion = "1.0";
    var dbDisplayName = "PREDatabase";
	//alert("Entre");

    //Init DB
    //
    window.db = window.openDatabase(dbName, dbVersion, dbDisplayName, dbSize);
    window.db.transaction(selectMonedas, errorCB);
	window.db.transaction(selectMonedasAcum, errorCB);

}

// Init the table
//
function errorCB(tx, err) {
    alert("Error processing SQL: " + err);
}
function successCB() {}
function selectMonedas(tx) {
    tx.executeSql('SELECT * FROM USUARIOS', [], querySuccess, errorCB);
}
function querySuccess(tx, rs) {
    // this will be empty since no rows were inserted.
    //for (var i = 0; i < rs.rows.length; i++) {
        var p = rs.rows.item(0);
		window.monedas=p.usu_monedas;
		cargarMonedas();
		//alert("monedas");
    //}
}
function cargarMonedas(){
	if(document.getElementById("val_mon")!=null){
	document.getElementById("val_mon").innerHTML=window.monedas;}else{setTimeout(function(){cargarMonedas();},50)
	}
}
function selectMonedasAcum(tx) {
    tx.executeSql('SELECT * FROM RONDA', [], querySuccessAcum, errorCB);
}
function querySuccessAcum(tx, rs) {
    // this will be empty since no rows were inserted.
    //for (var i = 0; i < rs.rows.length; i++) {
        var p = rs.rows.item(0);
		window.ptosAcumulados=p.ro_monedas;    //}
		estrellasAcum();
		terminarRonda();
}
function estrellasAcum(){
	if(document.getElementById("val_mon_acum")!=null){
	document.getElementById("val_mon_acum").innerHTML=window.ptosAcumulados;}else{setTimeout(function(){estrellasAcum();},50)
	}
}

function terminarRonda(){
	window.db.transaction(terminarRondaEx, errorMon);
}
function terminarRondaEx(tx) {
	valor=parseInt(window.monedas)+parseInt(window.ptosAcumulados);
    tx.executeSql("UPDATE USUARIOS SET usu_monedas ='"+valor+"'  WHERE rowid =1  ;", [],   updateMon, errorMon);
}
function updateMon(){
	setTimeout(function(){window.location='inicio.html';},6000);
	
}
function errorMon(){
}
