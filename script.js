function myFunctionNavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function printDataElement(ele) {
  $.getJSON("elements.json", function (jd) {
    for (var i = 0; i <= 118; i++) {
      if (jd[i].symbol == ele) {
        if (jd[i].name)
          document.getElementById("name").innerHTML = "Nume : " + jd[i].name;
        if (jd[i].appearance)
          document.getElementById("appearance").innerHTML = "Aspect : " + jd[i].appearance;
        if (jd[i].atomic_mass)
          document.getElementById("atomic_mass").innerHTML = "Masa atomica : " + jd[i].atomic_mass;
        if (jd[i].boil)
          document.getElementById("boil").innerHTML = "Temperatura de fierbere : " + jd[i].boil;
        if (jd[i].category)
          document.getElementById("category").innerHTML = "Categoria : " + jd[i].category;
        if (jd[i].color)
          document.getElementById("color").innerHTML = "Culoare : " + jd[i].color;
        if (jd[i].density)
          document.getElementById("density").innerHTML = "Densitate : " + jd[i].density;
        if (jd[i].discovered_by)
          document.getElementById("discovered_by").innerHTML = "Descoperit de " + jd[i].discovered_by;
        if (jd[i].melt)
          document.getElementById("melt").innerHTML = "Temperatura de topire : " + jd[i].melt;
        if (jd[i].molar_heat)
          document.getElementById("molar_heat").innerHTML = "Caldură molara : " + jd[i].molar_heat;
        if (jd[i].named_by)
          document.getElementById("named_by").innerHTML = "Numit de " + jd[i].named_by;
        if (jd[i].number)
          document.getElementById("number").innerHTML = "Numar : " + jd[i].number;
        if (jd[i].period)
          document.getElementById("period").innerHTML = "Perioda : " + jd[i].period;
        if (jd[i].phase)
          document.getElementById("phase").innerHTML = "Faza : " + jd[i].phase;
        //document.getElementById("source").innerHTML = jd[i].source;
        //document.getElementById("spectral_img").setAttribute("href" , jd[i].spectral_img);// = ;
        if (jd[i].summary)
          document.getElementById("summary").innerHTML = jd[i].summary;
        if (jd[i].symbol)
          document.getElementById("symbol").innerHTML = "Simbol : " + jd[i].symbol;
        if (jd[i].shells)
          document.getElementById("shells").innerHTML = "Straturi electromagnetice : " + jd[i].shells;
        if (jd[i].electron_configuration)
          document.getElementById("electron_configuration").innerHTML = "Configuratia elecroniclor : " + jd[i].electron_configuration;
        if (jd[i].electron_affinity)
          document.getElementById("electron_affinity").innerHTML = "Afinitatea electronilor : " + jd[i].electron_affinity;
        if (jd[i].electronegativity_pauling)
          document.getElementById("electronegativity_pauling").innerHTML = "Electronegativitate : " + jd[i].electronegativity_pauling;
      }
    }
  })

}
