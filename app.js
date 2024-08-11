function encryptor(string) {
    // Transform the string into a list
    let stringArr = string.split("");
    let arrEncrypted = [];
    for (let i = 0; i < stringArr.length; i++) {

        if (stringArr[i] == 'a') {
            arrEncrypted[i] = stringArr[i].replace('a', 'ai')
        } else if (stringArr[i] == 'e') {
            arrEncrypted[i] = stringArr[i].replace('e', 'enter')
        } else if (stringArr[i] == 'i') {
            arrEncrypted[i] = stringArr[i].replace('i', 'imes')
        } else if (stringArr[i] == 'o') {
            arrEncrypted[i] = stringArr[i].replace('o', 'ober')
        } else if (stringArr[i] == 'u') {
            arrEncrypted[i] = stringArr[i].replace('u', 'ufat')
        } else {
            arrEncrypted[i] = stringArr[i]
        }
    }
    return arrEncrypted.join("");
}

function decrypted(stringEnc) {
    textDecrypted = stringEnc.replace(/ufat/g, 'u')
          .replace(/ober/g, 'o')
          .replace(/imes/g, 'i')
          .replace(/enter/g, 'e')
          .replace(/ai/g, 'a')
    return textDecrypted
}

function assignTextToElement(text,element) {
    let elementSelectedHTML = document.querySelector(element);
    elementSelectedHTML.innerHTML = text;
    return
}

function toggleToVisible(selector) {
    let element = document.querySelector(selector);
    element.style.display = 'flex'; // Set display to flex to make it visible
}

function toggleToInvisible(selector) {
    let element = document.querySelector(selector);
    element.style.display = 'none'; // Set display to none to hide it
}

function encryptText() {
    // Select the textarea to get text from
    let text = document.querySelector('.input-textarea');
    let textEncrypted = encryptor(text.value);

    // Display the encrypted text
    assignTextToElement(textEncrypted, '.result-text');

    // Check if the section to hide is currently visible
    if (getComputedStyle(document.querySelector('.right-section')).display !== 'none') {
        toggleToInvisible('.right-section');
        toggleToVisible('.right-section-hidden');
    }

    // Clear the input field
    text.value = '';
}

function decyptText() {
    // Select the textarea to get text from
    let text = document.querySelector('.input-textarea');
    textDecrypted = decrypted(text.value)

    // Display the encrypted text
    assignTextToElement(textDecrypted,'.result-text');

    // Check if the section to hide is currently visible
    if (getComputedStyle(document.querySelector('.right-section')).display !== 'none') {
        toggleToInvisible('.right-section');
        toggleToVisible('.right-section-hidden');
    }

    // Clear the input field
    text.value = '';
}

function copy() {
    let textToCopy = document.querySelector('.result-text').innerText;

    // Copy the text inside the text field
    navigator.clipboard.writeText(textToCopy);
}