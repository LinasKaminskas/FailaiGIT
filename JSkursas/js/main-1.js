"Kartojimas"

"Ciklo valdymas: break ir continue"
"Funkcijos"

function masyvopaieska(masyviux) {
    var a = 0;
    var b = masyviux;
    var didziausias = 0;
    while (a<b.length) {
        if (b[a] > didziausias){
            var didziausias = b[a];
            console.log(didziausias);
        }
        a++
    }
    return masyviux;
}
var i = [150, 55, -100, 0, 305];
var b = [1550, 25, -100, 30];
var c = [16, 95, -50, 80];

console.log(masyvopaieska(i));
