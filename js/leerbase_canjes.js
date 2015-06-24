// JavaScript Document
$(document).ready(onDeviceReady);
window.premiosObtenidos=new Array();
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
	window.db.transaction(selectPremios, errorCB);

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
   // for (var i = 0; i < rs.rows.length; i++) {
        var p = rs.rows.item(0);
		window.monedas=p.usu_monedas;
		//alert("monedas");
		cargarMonedas();
    //}
}
function cargarMonedas(){
	if(document.getElementById("val_mon")!=null){
	document.getElementById("val_mon").innerHTML=window.monedas;}else{setTimeout(function(){cargarMonedas();},50)
	}
}
function selectPremios(tx) {
    tx.executeSql('SELECT * FROM CANJES', [], querySuccessC, errorCB);
}
function querySuccessC(tx, rs) {
    // this will be empty since no rows were inserted.
    for (var i = 0; i < rs.rows.length; i++) {
        var p = rs.rows.item(i);
		window.premiosObtenidos.push(p.ca_pr);
		//alert("monedas");
		cargarPremios();
    }
}
