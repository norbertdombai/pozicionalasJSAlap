console.log("console-ra irunk valamit");
document.write("Hello vilag");
document.getElementById("a").value="halihooooooooooooo";
var valtozoA=document.getElementById("a").value = 2;
var valtozoB=document.getElementById("b").value = 3;
document.getElementById("a").value;
document.getElementById("a").value;



           document.write("<p> Elso valtozo"+valatozoA+"</p>");
           document.write("<p> Masodik valtozo"+valtozoB+"</p>");
          var osszeg =Number (valtozoA) + Number (valtozoB);
          document.write("<p>Az osszeg: "+osszeg+"</p>");
        
var szöveg="";
var segedvaltozo=0;
for (var i=1; i < 101; i++) {
    szöveg+=i+", ";
    segedvaltozo++;
    if (segedvaltozo === 10){
        szoveg+="<br>";
        segedvaltozo=0;
    }
document.wtire("<p>" + szöveg + "</p>");



