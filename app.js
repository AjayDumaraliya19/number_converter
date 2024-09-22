let currentType = '';

function viewPopup() {
    const inputTypeDiv = document.getElementById("viewType");
    inputTypeDiv.classList.toggle("show");

    const arrow = document.getElementById("up");
    arrow.classList.toggle("arrow-up");
    arrow.classList.toggle("arrow-down");
}

function setType(type) {
    currentType = type;

    if (currentType === "decimal") {
        document.getElementById("output-content").innerHTML = "Binary";
    } else if (currentType === "binary") {
        document.getElementById("output-content").innerHTML = "Decimal";
    }

    const inputType = document.getElementById("inputType");
    inputType.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    inputType.classList.remove("disable");
    document.getElementById("viewType").classList.remove("show");
    document.getElementById("numberInput").value = '';
    document.getElementById("output").value = '';
}

function convertNumber() {
    const inputValue = document.getElementById("numberInput").value;
    const outputField = document.getElementById("output");

    if (currentType === 'decimal') {
        if (!/^\d*$/.test(inputValue)) {
            outputField.value = "Valid Number \"0 to 9\"";
            return;
        }
        const decimal = parseInt(inputValue, 10);
        outputField.value = isNaN(decimal) ? '' : decimal.toString(2);
    } else if (currentType === 'binary') {
        if (!/^[01]*$/.test(inputValue)) {
            outputField.value = "Valid Number \"0 & 1\"";
            return;
        }
        const binary = inputValue;
        outputField.value = parseInt(binary, 2).toString(10);
    }
}