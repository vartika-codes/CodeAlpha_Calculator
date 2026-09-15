const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){

    try{

        if(display.value.trim() === ""){
            return;
        }

        let result = eval(display.value);
        display.value = result;

    }
    catch{

        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}

/* ENTER KEY SUPPORT */

display.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        e.preventDefault();
        calculate();
    }
});

/* GLOBAL KEYBOARD SUPPORT */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){
        clearDisplay();
    }

    if(e.key === "Backspace" && document.activeElement !== display){
        deleteLast();
    }
});