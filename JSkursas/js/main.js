
"Ciklo valdymas : break ir continue."

/*var a = [10, 20, 0, 30, -15, 50, 150, -88, 5];
var suma = 1;
for (var i=0; i<a.length; i++) {
    console.log(a[i]);
    if (a[i] <= 0){
break }
var suma = suma * a [i];
    console.log(suma);
}*/
/*let b = [10, 20, 0, 30, -15, 50, 150, -88, 5];
let suma = 1;
for (let i = 0; i<b.length; i++) {

    if (b[i] >= 0) {

        continue
    }

    console.log(b[i]);

}*/


/*function calculateDogAge(age) {
        var dogAge = 7*age;
        console.log('You doggie is ' + dogAge + ' years old in dog years');
}
calculateDogAge(1);
calculateDogAge(8);
calculateDogAge(20);*/


//type="text/javascripti"

var figuros = [
    {ilgis: 2, plotis: 5, aukstis: 3},
    {ilgis: 3, plotis: 2, aukstis: 6},
    {ilgis: 1, plotis: 5, aukstis: 5}
];

function pradiniai() {
    var k = '<tbody>';
    for (i = 0; i < figuros.length; i++) {
        k += '<tr>';
        k += '<td>' + figuros[i].ilgis + '</td>';
        k += '<td>' + figuros[i].plotis + '</td>';
        k += '<td>' + figuros[i].aukstis + '</td>';
        k += '</tr>';
        k+='</body>';
    }
    document.getElementById('tableData').innerHTML = k;
}

function Rmax() {
    var k = '<tbody>';
    for (i = 0; i < figuros.length; i++) {
        k += '<tr>';
        k += '<td class="raudona">' + figuros[i].ilgis + '</td>';
        k += '<td class="raudona">' + figuros[i].plotis + '</td>';
        k += '<td class="raudona">' + figuros[i].aukstis + '</td>';

        var  turis= [figuros[i].ilgis * figuros[i].plotis * figuros[i].aukstis];

        k += '<td class="raudona">' + turis+ '</td>';
        figuros.splice(turis);

        k += '</tr>';
        k+='</body>';


        var maxt =  Math.max(...turis);
        document.getElementById("demo").innerHTML = maxt;
        console.log(maxt);


    }
    document.getElementById('tableData').innerHTML = k;

}
"Klases darbas:";

function daugyba(skaicius, kskaicius, tskaicius) {
    return skaicius*kskaicius*tskaicius;
}
console.log(daugyba (5, 20, 68));

var masyvas = [-55, 0, -5, -8, -25];
var didsk = Math.max(...masyvas);
console.log(didsk);
var min = Math.min(...masyvas);
console.log(min);

//function masyvasdid(masyv) {






