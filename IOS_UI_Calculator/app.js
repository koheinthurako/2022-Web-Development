let display = document.querySelector(".display");
let keypad = document.querySelector(".keypad");

const operators = ["+", "-", "*", "/", "%", "."];

let filter = x => {
    let lastChar = display.innerText[display.innerText.length-1];
    let current = display.innerText;

    if(current === "0" && x != ".") {
        clearLast();
    }

    if(operators.includes(x) && operators.includes(lastChar)) {
        if(lastChar === x) {
            return false;
        } else {
            clearLast();
            return true;
        }
    }

    return true;

}

let showInDisplay = x => {
    if(filter(x)) {
        if(display.innerText.length < 11) {
            display.innerHTML += x;
        }
    }
}

let calc = _ => {
    let lastChar = display.innerText[display.innerText.length-1];
    if(operators.includes(lastChar)) {
        return false;
    }
    
    display.innerText = eval(display.innerText);

};

let clearAll = _ => display.innerText = "";

let clearLast = _ => display.innerText = display.innerText.substring(0, display.innerText.length-1);
