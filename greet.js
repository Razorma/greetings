function greeting(){
    let theLanguage = ''
    let name = '';
    function getName(passedName){
        name = passedName;
    }
    function greetName(){
        return  name
    }
    function setLanguage(lang){
        theLanguage = lang;
    }
    function getLanguage(){
        return  theLanguage
    }
    return{
        getName,
        greetName,
        setLanguage,
        getLanguage,
    }
}

