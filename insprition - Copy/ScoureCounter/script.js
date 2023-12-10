let pl1 = document.querySelector(".btn1");
let pl2 = document.querySelector(".btn2");
let reset = document.querySelector(".btn3");
let pl1v = document.querySelector("#pl1r").textContent;
let pl2v = document.querySelector("#pl2r").textContent;
let result1 = 0;
let result2 = 0;
let winingScore =  document.getElementById("winingScore");

pl1.addEventListener("click", function() {
    result1 += 1;
        let added = document.querySelector("#pl1r").textContent = result1;
        if (winingScore.value == added) {
            pl1.disabled = true;
            pl2.disabled = true;
            pl1r.classList.add("bg-success");
            pl2r.classList.add("bg-danger");
            }   
        return added;      
}) 

pl2.addEventListener("click", function() {
    result2 += 1;
    let added = document.querySelector("#pl2r").textContent = result2;
    if (winingScore.value == added) {
        pl1.disabled = true;
        pl2.disabled = true;
        pl1r.classList.add("bg-danger");
        pl2r.classList.add("bg-success");
        }
        return added;
}) 

reset.addEventListener("click", function() {
         function reseted(){
            document.querySelector("#pl2r").textContent = pl2v;
            document.querySelector("#pl1r").textContent = pl1v;
            pl1.disabled = false;
            pl2.disabled = false;
            pl1r.classList.remove("bg-danger");
            pl2r.classList.remove("bg-success");
            pl2r.classList.remove("bg-danger");
            pl1r.classList.remove("bg-success");
            result1 = 0;
            result2 = 0;
         }
         return reseted();
}) 

winingScore.addEventListener("change", function () {
    function reseted(){
        document.querySelector("#pl2r").textContent = pl2v;
        document.querySelector("#pl1r").textContent = pl1v;
        result1 = 0;
        result2 = 0;
    }
     return reseted();
})