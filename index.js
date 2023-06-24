const calInput = document.querySelector(".input");
const grid = document.querySelector(".grid");

let displayValue = 0;
let num1,sign;
let waitingForSecond = false;

function updateValue(){
    calInput.value = displayValue;
}
updateValue();
function calculate(num1,num2,sign){
    if(sign === "+"){
return num1 + num2;
    }
    if(sign === "-"){
        return num1 - num2;
    }
    if(sign === "*"){
        return num1 * num2;
    }
    if(sign === "/"){
        return num1 / num2;
    }
}
function clear(){
    displayValue = 0;
}
grid.onclick = (event) => {  
   let value = event.target.value; 
   let element = event.target;
    if(element.classList.contains("sign")){
      if(!num1){
        num1 = parseFloat(displayValue) ;
      sign = value;
      }
      else {
        displayValue = calculate(num1,displayValue,sign);
        num1 = displayValue;
        sign = value;
        updateValue();    
      }
      waitingForSecond = true;
    }
    else if(element.classList.contains("equal")){
        displayValue = calculate(num1,displayValue,sign);
        updateValue();
        num1 = null;
        
    }
    else if(element.classList.contains("number")){ 
        if(waitingForSecond){
            displayValue = parseFloat(value); 
            waitingForSecond = false;   
        }
        else {
            displayValue = parseFloat(displayValue == 0 ? value : displayValue + value) ;        
        }     
        updateValue();   
    }
    else if(element.classList.contains("dot")){
        if(String(displayValue).includes(".")) return;
  displayValue = displayValue + value;
  updateValue();
    }
     else{
        clear();
        updateValue();
         }  
}
