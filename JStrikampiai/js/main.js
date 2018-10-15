var a = 5;
var b = 5;
var c = 5;
if(a+b>c&&b+c>a&&a+c>b){
    if(a==b==c){
        var plotas=a+b+c/3;
        var ats1=document.getElementById("trikampis");
        ats1.innerHTML+='Trikampis lygiakrastis'+plotas;
    }
    if(a==b&&a!=c&&b!=c||b==c&&a!=b&&a!=c||a==c&&a!=b&&c!=b){
        var plotas=a+b+c/3;
        var ats2=document.getElementById("trikampis");
        ats2=innerHTML+='Trikampis lygiasonis'+plotas;
    }
    /*if(a!=b!=c){
        var plotas=a+b+c/3;
        var ats3=document.getElementById("trikampis");
        ats3=innerHTML+='Paprastas trikampis'+plotas;
}*/
    else{
        console.log('Ne trikampis');
        var ats_ne=document.getElementById("trikampis");
        ats_ne=innerHTML+='Ne trikampis';

    }
}

/*document.getElementById("trikampis").innerHTML="Galimas";*/