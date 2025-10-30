const screen = document.getElementById("curr_calc");

function append(input) {
    screen.value += input;
}

function clearDisplay() {
    screen.value = "";
}

function calc() {
    screen.value = eval(screen.value);
}

function flipSign() {
    screen.value = eval(-1 * screen.value);
}

function backspace() {
    let val = screen.value;
    val = val.slice(0, -1);
    screen.value = val;
}