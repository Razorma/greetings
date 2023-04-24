
var namesGreeted = {};
var greetingsCounter = 0;
function greeting(){
    
    let theLanguage = ''
    let name = '';  
    function getName(passedName){
        const letterRegex = /^[a-zA-Z ]*$/
        if (passedName.trim().toLowerCase() !== '' && letterRegex.test(passedName)) {
            name = passedName.trim() ;
            if (namesGreeted[passedName.toLowerCase()] === undefined) {
              greetingsCounter++;
              namesGreeted[passedName.toLowerCase()] = 0;
            }else{
                namesGreeted[passedName.toLowerCase()] = passedName.toLowerCase();
            }
          }
       
    }
    function greetName(){
        return  name
    }
    function greetNumber(){
        return greetingsCounter
    }
  
    function greetedNames(){
        return namesGreeted
    }
    function setLanguageGreeting(lang){
        theLanguage = lang+", ";
    }
    function getLanguageGreeting(){
        return  theLanguage
    }
    function error(){
        return{
            nameMessage : "please enter Name",
            langMessage : "please enter language",

        }
    }
    return{
        getName,
        greetName,
        setLanguageGreeting,
        getLanguageGreeting,
        greetNumber,
        greetedNames,
        error,
    }
}

