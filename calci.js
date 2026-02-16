const decimalInput = document.getElementById('decimal');
const binaryInput = document.getElementById('binary');
const octalInput = document.getElementById('octal');
const hexInput = document.getElementById('hexadecimal');
const errorMsg = document.getElementById('error-msg');

let isUpdating = false;

function showError(message) {
    errorMsg.textContent = message;
}

function clearError() {
    errorMsg.textContent = "";
}

function clearOutputs() {
    binaryInput.value = '';
    octalInput.value = '';
    hexInput.value = '';
}

function convertAndUpdate(base, value) {
    if (isUpdating) return;

    if (value.trim() === '') {
        decimalInput.value = '';
        binaryInput.value = '';
        octalInput.value = '';
        hexInput.value = '';
        clearError();
        return;
    }

    let num;

    switch (base) {

        case 10:
            if (!/^-?\d+$/.test(value)) {
                showError("❌ Invalid Decimal Number");
                clearOutputs();
                return;
            }
            clearError();
            num = parseInt(value, 10);
            break;

        case 2:
            if (!/^[01]+$/.test(value)) {
                showError("❌ Invalid Binary Number");
                clearOutputs();
                return;
            }
            clearError();
            num = parseInt(value, 2);
            break;

        case 8:
            if (!/^[0-7]+$/.test(value)) {
                showError("❌ Invalid Octal Number");
                clearOutputs();
                return;
            }
            clearError();
            num = parseInt(value, 8);
            break;

        case 16:
            if (!/^[0-9a-fA-F]+$/.test(value)) {
                showError("❌ Invalid Hexadecimal Number");
                clearOutputs();
                return;
            }
            clearError();
            num = parseInt(value, 16);
            break;
    }

    isUpdating = true;

    decimalInput.value = num.toString(10);
    binaryInput.value = num.toString(2);
    octalInput.value = num.toString(8);
    hexInput.value = num.toString(16).toUpperCase();

    isUpdating = false;
}

decimalInput.addEventListener("input", () => convertAndUpdate(10, decimalInput.value));
binaryInput.addEventListener("input", () => convertAndUpdate(2, binaryInput.value));
octalInput.addEventListener("input", () => convertAndUpdate(8, octalInput.value));
hexInput.addEventListener("input", () => convertAndUpdate(16, hexInput.value));
