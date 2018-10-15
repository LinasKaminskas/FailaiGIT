
var a = 3;
var  b = 4;
var c = 5;
var perimeter = (a + b + c) / 2;
var area = Math.sqrt(perimeter*((perimeter - a)*(perimeter-b)*(perimeter-c)));

if (a < b + c && b < a + c && c < a + b) {
    console.log('Galime');
    document.getElementById("trikampis").innerHTML='Galimas trikampis';
    if (a == b && b == c ) {
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

var m = [ 22, 64, 0, -55, 4, 7, -1, 8, -66 ];
var  viso = 0;
var i = 0;
while (i<m.length){
    viso += m[i];
    i++;
}

console.log(viso/m.length);

var i = 0;
for (i > 0; i< 21;i+=4){
    console.log(i);
}


