let toUpper = document.querySelectorAll(".Upper");
for(element of toUpper){
    element.innerHTML = element.innerHTML.toUpperCase();
}
let count = 0;
let formApplication = document.querySelectorAll("#step");
const nextStepButton = document.getElementById("nextButton");
const lastEstimationButton = document.getElementById("estimationButton");



let displayForm = function (){
    if(count >= 1){
        lastEstimationButton.style.display = "block";
        nextStepButton.style.display = "none";
    }
    count ++;
    for(let i = 0; i < formApplication.length; i++){
        console.log(count, i);
        if(count === i){
            formApplication[i].style.display="block"
        } else {
            formApplication[i].style.display="none"
        }
    }
}

nextStepButton.addEventListener("click", displayForm);

