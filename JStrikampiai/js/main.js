
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



