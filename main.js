let display = document.getElementById("display");

function press(val) {
display.value += val;
}

function clearDisplay() {
display.value = display.value.slice(0, -1);
}

function clearAll() {
display.value = "";
}

function calculate() {
try {
display.value = eval(display.value);
} catch {
display.value = "Error";
}
}