
const greet = greeting()
const greetButton = document.querySelector(".greetNameButton");
const outputGreeting = document.querySelector(".outputGreeting");
const greetingElement = document.querySelector(".outputName");
const greetNamePassed = document.querySelector(".name-area")
const numGreetings = document.querySelector(".numGreetings")
const message = document.querySelector(".message")
const message2 = document.querySelector(".message2")
const resetButton = document.querySelector('.resetNameButton');
const greetNameInput = document.querySelector('input[type="text"]');

greetNameInput.addEventListener('keydown', function(press) {
  const letterRegex = /^[a-zA-Z]*$/;
  if (!letterRegex.test(press.key)) {
    press.preventDefault();
  }
});



greetingsCounter = localStorage.getItem("value")
numGreetings.innerHTML = greetingsCounter
namesGreeted = JSON.parse(localStorage.getItem('namesGreeted')) || {};


greetButton.addEventListener("click",function(){  
    if(greetNamePassed.value === ""){
        message.innerHTML = greet.error().nameMessage;
        setTimeout(function() {
            message.innerHTML = '';
        }, 2500)
    }else{
        message.innerHTML = ''
    }
    const checkedLangBtn = document.querySelector("input[name='language']:checked");
    if(checkedLangBtn){
        greet.getName(greetNamePassed.value)
        greetingElement.innerHTML = greet.greetName()
        greet.setLanguageGreeting(checkedLangBtn.value);
        outputGreeting.innerHTML = greet.getLanguageGreeting()
        localStorage.setItem("value",greet.greetNumber())
        localStorage.setItem('namesGreeted', JSON.stringify(greet.greetedNames()));
        console.log(JSON.parse(localStorage.getItem('namesGreeted')))
        numGreetings.innerHTML = localStorage.getItem("value")

    }else{
        message2.innerHTML = greet.error().langMessage;
        setTimeout(function() {
            message2.innerHTML = '';
        }, 2500)
    }
    
    greetNamePassed.value = '';
    checkedLangBtn.checked = false;
})
resetButton.addEventListener('click', function(){
    const checkedLangBtn = document.querySelector("input[name='language']:checked");
    localStorage.clear();
    numGreetings.innerHTML = 0;
    namesGreeted = {};
    greetingsCounter = 0;
    greetNamePassed.value = '';
    checkedLangBtn.checked = false;
});
