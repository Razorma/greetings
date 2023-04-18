const greet = greeting()
const greetButton = document.querySelector(".greetNameButton");
const outputGreeting = document.querySelector(".outputGreeting");
const greetingElement = document.querySelector(".outputName");
const greetNamePassed = document.querySelector(".name-area")
 
greetButton.addEventListener("click",function(){
    greet.getName(greetNamePassed.value)
    greetingElement.innerHTML = greet.greetName()
    greetNamePassed.value = '';
    const checkedLangBtn = document.querySelector("input[name='language']:checked");
    greet.setLanguage(checkedLangBtn.value);
    outputGreeting.innerHTML = greet.getLanguage()
})