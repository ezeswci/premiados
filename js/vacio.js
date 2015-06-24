$(document).ready(onDeviceReady);

//Global database
//
var db;

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
    db = window.openDatabase(dbName, dbVersion, dbDisplayName, dbSize);
    db.transaction(initDB, errorCB, successCB);
	db.transaction(insertDB, errorCB, successCB);
	db.transaction(initDB1, errorCB, successCB);
	db.transaction(insertDB1, errorCB, successCB);
	db.transaction(initDB2, errorCB, successCBu);

}

// Init the table
//
function initDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USUARIOS (usu_monedas)');
}
function insertDB(tx) {
    tx.executeSql('INSERT INTO USUARIOS (usu_monedas) VALUES (0)');
}
function initDB1(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS RONDA (ro_monedas)');
}
function insertDB1(tx) {
    tx.executeSql('INSERT INTO RONDA (ro_monedas) VALUES (0)');
}
function initDB2(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS CANJES (ca_pr, ca_canjeado)');
}
// Transaction error callback
//
function errorCB(tx, err) {
    alert("Error processing SQL: " + err);
}

// Transaction success callback
//
function successCB() {
}


function successCBu() {
		window.location = "inicio.html";
		//alert("Todo Creado");
}
