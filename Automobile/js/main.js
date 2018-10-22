function clear2() {

    var kdata = document.getElementById('data-laikas').value;
    var knumeris = document.getElementById('numeris').value;
    var katstumas = document.getElementById('atstumas').value;
    var klaikas = document.getElementById('laikas').value;


    var table = document.getElementById("emptytable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = kdata;
    cell2.innerHTML = knumeris;
    cell3.innerHTML = katstumas;
    cell4.innerHTML = klaikas;

    document.getElementById("form-wrapper").reset();

}


/*var a = [10, 20, 0, 30, -15, 50, 150, -88, 5];
var suma = 1;
for (var i=0; i<a.length; i++) {
    console.log(a[i]);
    if (a[i] <= 0){
break }
var suma = suma * a [i];
    console.log(suma);
}*/
var b = [10, 20, 0, 30, -15, 50, 150, -88, 5];
var suma = 1;
for (var i = 0; i<b.length; i++) {
    if (b[i] >= 0) {
        continue
        console.log(b[i]);
    }
}

