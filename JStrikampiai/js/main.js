var a = 5;
var b = 5;
var c = 5;
if (a+b>c&&b+c>a&&a+c>b){
    if (a==b==c){
        var plotas=a+b+c/3;
        var ats1=document.getElementById("trikampis");
        ats1.innerHTML+='Trikampis lygiakrastis'+plotas;
    }

}
/*document.getElementById("trikampis").innerHTML="Galimas";*/