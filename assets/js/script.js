

function ageIndays() {
    var year = prompt("What year you were born?");
    var ageInDays = (new Date().getFullYear() - year) * 365;
    var h1 = document.createElement('h1');
    var textAns = document.createTextNode("You are " + ageInDays + " old!");
    h1.setAttribute("id","ageIndays");
    h1.appendChild(textAns);
    document.getElementById("flex-box-result").appendChild(h1);
    console.log(ageInDays);
}

function reset () {
    document.getElementById("ageIndays").remove();
}