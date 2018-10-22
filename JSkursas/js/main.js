/*var a = [10, 20, 0, 30, -15, 50, 150, -88, 5];
var suma = 1;
for (var i=0; i<a.length; i++) {
    console.log(a[i]);
    if (a[i] <= 0){
break }
var suma = suma * a [i];
    console.log(suma);
}*/
let b = [10, 20, 0, 30, -15, 50, 150, -88, 5];
let suma = 1;
for (let i = 0; i<b.length; i++) {

    if (b[i] >= 0) {

        continue
    }

    console.log(b[i]);

}


/*function calculateDogAge(age) {
        var dogAge = 7*age;
        console.log('You doggie is ' + dogAge + ' years old in dog years');
}
calculateDogAge(1);
calculateDogAge(8);
calculateDogAge(20);*/