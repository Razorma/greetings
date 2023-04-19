var namesGreeted = {};
function greeting(){
    
    let theLanguage = ''
    let name = '';
    let greetingsCounter = 0;
    function getName(passedName){
        if (passedName.trim() !== '') {
            name = passedName.trim();
            if (namesGreeted[passedName] === undefined) {
              greetingsCounter++;
              namesGreeted[passedName] = 0;
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
        theLanguage = lang+",";
    }
    function getLanguageGreeting(){
        return  theLanguage
    }
    return{
        getName,
        greetName,
        setLanguageGreeting,
        getLanguageGreeting,
        greetNumber,
        greetedNames,
    }
}


