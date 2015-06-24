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
}

// Init the table
//
function initDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USUARIOS (usu_monedas)');
}
function insertDB(tx) {
	tx.executeSql('SELECT * FROM USUARIOS', [], querySuccess, errorCB);
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


function querySuccess(tx, rs) {
    // this will be empty since no rows were inserted.
	//alert(rs.rows.length);
	if(rs.rows.length>0){
		window.location = "index2.html";
	}else{
		window.location = "inicio.html";
	}
}
