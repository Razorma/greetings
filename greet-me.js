
const greet = greeting()
const greetButton = document.querySelector(".greetNameButton");
const outputGreeting = document.querySelector(".outputGreeting");
const greetingElement = document.querySelector(".outputName");
const greetNamePassed = document.querySelector(".name-area")
const numGreetings = document.querySelector(".numGreetings")
const message = document.querySelector(".message")
const message2 = document.querySelector(".message2")
const resetMessage = document.querySelector(".resetMessage")
const resetButton = document.querySelector('.resetNameButton');
const greetNameInput = document.querySelector('input[type="text"]');

greetNameInput.addEventListener('keydown', function (press) {
    const letterRegex = /^[a-zA-Z ]*$/;
    if (!letterRegex.test(press.key)) {
        message.innerHTML = "enter only letters";
        setTimeout(function () {
            message.innerHTML = '';
        }, 2500)
        press.preventDefault();
    }
});


greetingsCounter = localStorage.getItem("value")
numGreetings.innerHTML = greetingsCounter
namesGreeted = JSON.parse(localStorage.getItem('namesGreeted')) || {};


greetButton.addEventListener("click", function () {
    if (greetNamePassed.value === "") {
        message.innerHTML = greet.error().nameMessage;
        setTimeout(function () {
            message.innerHTML = '';
        }, 2500)
    } else {
        message.innerHTML = ''
    }
    const checkedLangBtn = document.querySelector("input[name='language']:checked");
    if (checkedLangBtn) {
        greet.getName(greetNamePassed.value)

        if (greet.greetName() !== "") {
            greetingElement.innerHTML = greet.greetName()
            greet.setLanguageGreeting(checkedLangBtn.value);
            outputGreeting.innerHTML = greet.getLanguageGreeting()
            localStorage.setItem("value", greet.greetNumber())
            localStorage.setItem('namesGreeted', JSON.stringify(greet.greetedNames()));
            numGreetings.innerHTML = localStorage.getItem("value")
        }
        checkedLangBtn.checked = false;
    } else {
        message2.innerHTML = greet.error().langMessage;
        setTimeout(function () {
            message2.innerHTML = '';
        }, 2500)
    }

    greetNamePassed.value = '';

})
resetButton.addEventListener('click', function () {
    const checkedLangBtn = document.querySelector("input[name='language']:checked");
    localStorage.clear();
    numGreetings.innerHTML = 0;
    namesGreeted = {};
    greetingsCounter = 0;
    greetNamePassed.value = '';
    if (checkedLangBtn) {
        checkedLangBtn.checked = false;
    }
    resetMessage.innerHTML = "Reset successful names have been cleared from storage"
    setTimeout(function () {
        resetMessage.innerHTML = '';
    }, 2500)
    outputGreeting.innerHTML = '"Greeting,"'
    greetingElement.innerHTML = '"name"'
});
