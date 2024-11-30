const display=document.getElementById("display");

function appendToDisplay(value){
display.value+=value;
}

function calculateResult(){
    const result=eval(display.value);
    display.value=result;
}

function clearDisplay(){
    display.value="";
}




