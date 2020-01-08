function placa() {
  var wyplata=[];
  var i =1;
  var hpm=160;

  while (i<=3) {


  var s1= document.getElementById('stawka'+i).value;
    s1=parseFloat(s1);
  var etat =document.getElementById("etat"+i);
  var etatv= etat.options[etat.selectedIndex].value;
  var x=""
  if (etatv=="pelen") {
    x=1;
  }
  else {
    x=0.5;
  }
  var placa = s1*x*hpm;
    wyplata.push(placa);

    i++;

  }

    var wyplata =wyplata.sort(function(b, a)
    {return b - a});


    document.getElementById("wyp1").innerHTML=wyplata[0]+ ' zl<br><img src="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2457-thumb.png">';
    document.getElementById("wyp2").innerHTML=wyplata[1]+ ' zl<br><img src="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2457-thumb.png">';
    document.getElementById("wyp3").innerHTML=wyplata[2]+ ' zl<br><img src="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2457-thumb.png">';


}
document.getElementById("przelicz").addEventListener("click", placa);
