const textBlock = document.getElementById("input");
const counterBlock = document.querySelector("output");

const textLength = 50;

textBlock.addEventListener("input", function () {
    const textValue = this.value;
    counterBlock.textContent = textValue.length;

    if (textValue.length >= textLength) {
        counterBlock.style.backgroundColor = "red";


    } else if (textValue.length <= textLength) {
        counterBlock.style.backgroundColor = "green";
    };

});



