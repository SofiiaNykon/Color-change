const Berlin = document.getElementById("one");
const city =  document.getElementById("two");
const change = "Stuttgart";
const button = document.getElementById("btn");
const returns = document.getElementById("return");
const citys = "Berlin";



button.onclick = function changeCity(){
    Berlin.textContent = change;
    city.textContent = change;
}

returns.onclick = function returnCity(){
    document.getElementById("one","two").textContent = citys;
}

