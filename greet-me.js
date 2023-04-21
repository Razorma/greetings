
const greet = greeting()
const greetButton = document.querySelector(".greetNameButton");
const outputGreeting = document.querySelector(".outputGreeting");
const greetingElement = document.querySelector(".outputName");
const greetNamePassed = document.querySelector(".name-area")
const numGreetings = document.querySelector(".numGreetings")
const message = document.querySelector(".message")
const message2 = document.querySelector(".message")
const resetButton = document.querySelector('.resetNameButton');
const checkbox = document.querySelector('.language');

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
        message.innerHTML = "please enter Name"
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
        message2.innerHTML = "please enter language"
    }
    checkbox.checked = false;
    greetNamePassed.value = '';
})
resetButton.addEventListener('click', function(){
    localStorage.clear();
    numGreetings.innerHTML = 0;
    namesGreeted = {};
    greetingsCounter = 0;
});
