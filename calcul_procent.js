var usedElements = [];
var nrAtEle = [];



function myCreateFunction() {
    var table = document.getElementById("myTable");
    var rows = table.rows.length;
    var row = table.insertRow(rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var sel = document.createElement("select");
    sel.classList.add("elements");
    sel.onchange = function () { myNewFunction(this); };
    cell1.appendChild(sel);
    selectFunction(rows - 1);

    var tex = document.createElement("input");
    tex.type = "number";
    tex.min = "0";
    tex.classList.add("nato_pf");
    cell2.appendChild(tex);

    var img = document.createElement('img');
    img.src = "delete_.png";
    cell3.appendChild(img);
    cell3.classList.add("delete");
}
var table = document.getElementById("myTable");
window.setInterval(function () {
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[2].onclick = function () {
            if (this.parentElement.rowIndex >= 1 && table.rows.length > 2) {
                table.deleteRow(this.parentElement.rowIndex);
                myNewFunction(null);
            }
        };
    }
    while (nrAtEle.length > 0) {
        nrAtEle.pop();
    }
    for (var i = 0; i < table.rows.length - 1; ++i) {
        var nrAt = document.getElementsByClassName("nato_pf")[i].value;
        if (nrAt) {
            nrAtEle.push(nrAt);
        }
        if (!nrAt) {
            nrAtEle.push("0");
        }
    }
    calcul_masa();

    if (document.getElementsByClassName("nato_pf")[table.rows.length - 2].value) {
        myCreateFunction();
    }
    
}, 500);

function myNewFunction(sel) {
    while (usedElements.length > 0) {
        usedElements.pop();
    }
    for (var i = 0; i < table.rows.length - 1; ++i) {
        var e = document.getElementsByClassName("elements")[i];
        var strUser = e.value;
        if (usedElements.indexOf(e.value) == -1 && e.value != "select") {
            usedElements.push(e.value);
        }
        if (usedElements.indexOf(e.value) == -1 && e.value == "select") {
            usedElements.push("");
        }
    }
    // console.log(usedElements);

}

selectFunction(0);

function selectFunction(poz) {
    calcul_masa();
    $.getJSON("masa_calcul_v2.json", function (jd) {
        var html = "";
        html += "<option value=" + "select" + ">" + "Selecteaza element" + "</option>"
        for (var i = 0; i < jd.length; ++i) {
            if (usedElements.indexOf(jd[i].symbol) == -1)
                html += "<option value=" + jd[i].symbol + ">" + jd[i].symbol + "</option>"
        }
        var x = document.getElementsByClassName("elements");
        x[poz].innerHTML = html;
    })
}

function calcul_masa() {
    var mas = 0;
    var form = "<p id=\"res\"><c>";
    $.getJSON("masa_calcul_v2.json", function (jd) {

        for (var j = 0; j < jd.length; ++j) {
            for (var i = 0; i < usedElements.length; ++i) {
                if (jd[j].symbol == usedElements[i]) {
                    if (nrAtEle[i] >= 1) {
                        form += jd[j].symbol;
                    }
                    if (nrAtEle[i] > 1) {
                        form += ("<sub>" + nrAtEle[i] + "</sub>");
                    }
                    if (nrAtEle[i]) {
                        mas += (jd[j].atomic_mass * nrAtEle[i]);
                    }
                    break;
                }
            }
        }
        form += "</c> </p>";
        for (var i = 0; i < usedElements.length; ++i) {
            for (var j = 0; j < jd.length; ++j) {
                if (usedElements[i] == jd[j].symbol) {
                    if((jd[j].atomic_mass * nrAtEle[i]) / mas * 100){
                        form += "<v> " + jd[j].symbol +" : " +((jd[j].atomic_mass * nrAtEle[i]) / mas * 100).toFixed(2) + "%</v><br>";
                    }
                }
            }
        }
        document.getElementById("result").innerHTML = form;
        
    })
}
