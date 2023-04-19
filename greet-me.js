const greet = greeting()
const greetButton = document.querySelector(".greetNameButton");
const outputGreeting = document.querySelector(".outputGreeting");
const greetingElement = document.querySelector(".outputName");
const greetNamePassed = document.querySelector(".name-area")
const numGreetings = document.querySelector(".numGreetings")
numGreetings.innerHTML = localStorage.getItem("value")


 greetButton.addEventListener("click",function(){
   
    
    const checkedLangBtn = document.querySelector("input[name='language']:checked");
    if(checkedLangBtn){
        greet.getName(greetNamePassed.value)
        greetingElement.innerHTML = greet.greetName()
        greet.setLanguageGreeting(checkedLangBtn.value);
        outputGreeting.innerHTML = greet.getLanguageGreeting()
        localStorage.setItem("value",greet.greetNumber())
        numGreetings.innerHTML = localStorage.getItem("value")

    }
    greetNamePassed.value = '';
})