var persones = function (id ,nom, cognom, telefon) {
    this.id = id;
    this.nom = nom;
    this.cognom = cognom;
    this.telefon = telefon;
}

function button() {

    var arraylength = prompt("Introdueix la llargada del array");

    var agenda = [];

    var char;
    for (var n = 0; n < arraylength ; n++) {
        id = n+1;
        nom = prompt("nom");
        cognom = prompt("cognom");
        telefon =  prompt("telefon");
        agenda[n] = new persones (id, nom, cognom, telefon);
    }

    var text = "";
    for (var n = 0; n < arraylength ; n++){
        text = text + "<br>" + agenda[n].id + " " + agenda[n].nom + " " + agenda[n].cognom + " " + agenda[n].telefon;
    }
        document.getElementById('text').innerHTML = "<div>"+text+"<div>";
}
