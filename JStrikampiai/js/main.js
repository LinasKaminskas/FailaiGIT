
var a = 3;
var  b = 4;
var c = 5;
var perimeter = (a + b + c) / 2;
var area = Math.sqrt(perimeter*((perimeter - a)*(perimeter-b)*(perimeter-c)));

if (a < b + c && b < a + c && c < a + b) {
    console.log('Galime');
    document.getElementById("trikampis").innerHTML='Galimas trikampis';
    if (b == a && b == c) {
        console.log('lygiakrastis');
        document.getElementById("trikampis").innerHTML='Trikampis lygiakrastis ' + area.toFixed(2) + ' plotas';
    } else if  (a == b && a != c || a == c && a != b || b == c && b != a) {
        console.log('lygiasonis');
        document.getElementById("trikampis").innerHTML='Trikampis lygiasonis '+ area.toFixed(2) + ' plotas';
    } else {
        console.log('ivairiakrastis');
        document.getElementById("trikampis").innerHTML='Trikampis ivairiasonis '+ area.toFixed(2) + ' plotas';
    }
}
else {
    console.log('negalime');
}

//masyvas

/*var m  = [[15, 10 ,15, 20], [20, 10 ,20, 10], [7, 7 ,7, 7]];
var  a = m[0];
var b = m[1];
var c = m[2];*/

/*var m = [ 22, 64, 0, -55, 4, 7, -1, 8, -66 ];
var  viso = 0;
var i = 0;
while (i<m.length){
    viso += m[i];
    i++;
}*/

//console.log(viso/m.length);

/*var i = 0;
for (i > 0; i< 21;i+=4){
    console.log(i);
}*/

//17.1

/*var counter = -10;
while (counter < 20) {
    console.log(counter);
    counter++;
}*/

//17.2

/*var  counter = 10;
while (counter <= 40) {
    console.log(counter);
    counter += 2;
}*/

//17.3

/*var counter = 300;
while (counter <= 333) {
    if (counter %2 !== 0) {
        console.log(counter)
    }
    counter +=1;
}*/

//17.4

/*var  counter = 5;
while (counter <= 50){
    if (counter % 5 === 0 && counter % 3 === 0){
        console.log(counter);
    }
    counter += 1;
}*/

//17.5

/*var x = 5;
var k =2;
var answer = Math.pow(x, k);
document.getElementById("laipsnis").innerHTML= answer.toFixed(2);*/

//17.6

/*var  n = 3; //eiles
var  k = 8; //kedes
var s = 0; //viso
for (var i=0; i<n; i++) {
    s += k + i*2;
}
console.log(s);*/

//17.7

/*var k = 0; //keliamieji metai
var m = 1898; //pradzia metu skaiciavimo
var n = 1910; //pabaiga metu skaiciavimo
for (k = m; k <= n; k++) {
    if (k % 4 == 0  && k % 100 !==0 || k % 400 == 0  && k % 100 == 0)


    console.log(k);
}*/

//17.8

/*var numbers = -10;
while (numbers< 19){
    console.log(counter++);
}*/

/*var  numbers = 10;
while (numbers < 40){
    console.log(numbers += 2);
}*/

/*var numbers = 300;
while (numbers <= 333) {
    if (numbers % 2 != 0) {

    }
    console.log(numbers++);
}*/

/*var  numbers = 5;
while (numbers <= 50) {
    if (numbers % 5 === 0 && numbers % 3 === 0) {
        console.log(numbers);

    }
    numbers++;
}*/

function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjuor taut le monde';
    }
    if (lang == 'ger'){
        return 'Hallo Welt'
    }
    else {
        return 'Hello World'
    }
}
console.log(helloWorld('en'));
//console.log(helloWorld('ger'));
//console.log(helloWorld('fr'));

function calc_sales(units_a, units_b, units_c) {
    return units_a*79 + units_b * 129 + units_c * 699;
}
console.log(calc_sales(a,b,c));



function mygtukas() {
        document.getElementById("kspal").style.color = "red"

}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}