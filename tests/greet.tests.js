describe('Greet Function tests' , function(){
    it('it should be able to get the name that is passed' , function(){
        let greet = greeting()
        greet.getName('Bob')
        assert.equal(greet.greetName(),'Bob');

    });
    it('it should be able to greet you with Molo if isiXhosa is checked' , function(){
        let greet = greeting()
        greet.setLanguageGreeting('Molo')
        assert.equal(greet.getLanguageGreeting(),'Molo,');

    });
    it('it should be able to greet you with Sawbona if isiZulu is checked' , function(){
        let greet = greeting()
        greet.setLanguageGreeting('Sawbona')
        assert.equal(greet.getLanguageGreeting(),'Sawbona,');

    });
    it('it should be able to greet you with Hello if English is checked' , function(){
        let greet = greeting()
        greet.setLanguageGreeting('Hello')
        assert.equal(greet.getLanguageGreeting(),'Hello,');

    });
    // it('it should be able to count the same name only once as the greeted name' , function(){
    //     let greets = greeting();
    //     greets.getName("bheka")
    //     greets.getName("bheka")
    //     greets.getName("bheka")
    //     greets.getName("bheka")
    //     assert.equal(greets.greetNumber(),1);

    // });

});