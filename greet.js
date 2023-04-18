function greeting(){
    let name = '';
    function getName(passedName){
        name = passedName;
    }
    function greetName(){
        return "Hello, " + name
    }
    return{
        getName,
        greetName,
    }
}
const greet = greeting()
greet.getName("mama")
console.log(greet.greetName())
const greetButton = document.querySelector(".greetNameButton")
const greetingElement = document.querySelector(".greeting");
const greetNamePassed = document.querySelector(".name-area")
 
greetButton.addEventListener("click",function(){
    greet.getName(greetNamePassed.value)
    greetingElement.innerHTML = greet.greetName()
    greetNamePassed.value = '';
})
