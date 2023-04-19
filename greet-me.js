const greet = greeting()
const greetButton = document.querySelector(".greetNameButton");
const outputGreeting = document.querySelector(".outputGreeting");
const greetingElement = document.querySelector(".outputName");
const greetNamePassed = document.querySelector(".name-area")
const numGreetings = document.querySelector(".numGreetings")
const resetButton = document.querySelector('.resetNameButton');
counter = localStorage.getItem("value")
greetingsCounter = counter || 0;
numGreetings.innerHTML = greetingsCounter
namesGreeted = JSON.parse(localStorage.getItem('namesGreeted')) || 0;
greetButton.addEventListener("click",function(){
   
    
    const checkedLangBtn = document.querySelector("input[name='language']:checked");
    if(checkedLangBtn){
        greet.getName(greetNamePassed.value)
        greetingElement.innerHTML = greet.greetName()
        greet.setLanguageGreeting(checkedLangBtn.value);
        outputGreeting.innerHTML = greet.getLanguageGreeting()
        localStorage.setItem("value",greet.greetNumber())
        localStorage.setItem('namesGreeted', JSON.stringify(greet.greetedNames()));
        numGreetings.innerHTML = localStorage.getItem("value")

    }
    greetNamePassed.value = '';
})
resetButton.addEventListener('click', function(){
    localStorage.clear();
    numGreetings.innerHTML = 0;
    namesGreeted = {};
    greetingsCounter = 0;
});