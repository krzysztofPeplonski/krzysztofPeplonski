document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("input[type='button']").onclick = function () {

        wyslij();

    }

});

function wyslij() {

    //

    let imie = document.querySelector("input[name='imie']").value;

    if (imie != "") {
        document.querySelector("#imie").innerHTML = imie;
        document.querySelector("#error_imie").innerHTML = "";
    }
    else {
        document.querySelector("#imie").innerHTML = "";
        document.querySelector("#error_imie").innerHTML = "BŁĄD";
    }

    //

    let nazwisko = document.querySelector("input[name='nazwisko']").value;

    if (nazwisko != "") {
        document.querySelector("#nazwisko").innerHTML = nazwisko;
        document.querySelector("#error_nazwisko").innerHTML = "";
    }
    else {
        document.querySelector("#nazwisko").innerHTML = "";
        document.querySelector("#error_nazwisko").innerHTML = "BŁĄD";
    }

    //

    let miasto = document.querySelector("select[name='miasto']").value;
  

    if (miasto != "") {
        document.querySelector("#miasto").innerHTML = miasto;
        document.querySelector("#error_miasto").innerHTML = "";
    }
    else {
        document.querySelector("#miasto").innerHTML = "";
        document.querySelector("#error_miasto").innerHTML = "BŁĄD";
    }

    /////////

    let techTab = document.querySelectorAll("input[type='checkbox']");
    let technologia = [];
    for (let x of techTab) {
        if (x.checked) {
            technologia.push(x.value);
        }
    }

    if (technologia.length == 0) {
        //console.log("Nic nie zaznaczono !!!");
    }
    else {
        //console.log(technologia);
    }


    if (technologia != "") {
        document.querySelector("#technologie").innerHTML = technologia;
        document.querySelector("#error_technologia").innerHTML = "";
    }
    else {
        document.querySelector("#technologie").innerHTML = "";
        document.querySelector("#error_technologia").innerHTML = "BŁĄD";
    }
    
    ////////

    let stanowiskoTab = document.querySelectorAll("input[name='stanowisko']");
    let stanowiskoTab1 = "";
    for (let x of stanowiskoTab) {
        if (x.checked) {
            stanowiskoTab1 = x.value;
            break;
        }
    }

    if (stanowiskoTab1 == "") {
        //console.log("Nic nie zaznaczono !!!");
    }
    else {
        //console.log(stanowiskoTab1);
    }



    if (stanowiskoTab1 != "") {
        document.querySelector("#stanowisko").innerHTML = stanowiskoTab1;
        document.querySelector("#error_stanowisko").innerHTML = "";
    }
    else {
        document.querySelector("#stanowisko").innerHTML = "";
        document.querySelector("#error_stanowisko").innerHTML = "BŁĄD";
    }
    //////////

    let uwagi = document.querySelector("textarea[name='uwagi']").value;
    document.querySelector("#uwagi").innerHTML = uwagi;
}