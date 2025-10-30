const input = document.getElementById('color_picker');
const button = document.getElementById('submit_button');

button.addEventListener("click", () => {
    let hexValue = input.value.trim();

    if (!hexValue.startsWith("#")) {
          hexValue = "#" + hexValue;
    }
    
    document.body.style.backgroundColor = hexValue
})