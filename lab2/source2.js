(function () {

    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            goodBye(names[i]);
        } else {
            hello(names[i]);
        }
    }

    console.log("\n"); 
    console.log("Імена, що починаються на літери першої половини алфавіту (A-M), отримують привітання Hello, інші — Good Bye.");

    for (var i = 0; i < names.length; i++) {
        var firstLetterUpper = names[i].charAt(0).toUpperCase();
        if (firstLetterUpper <= "M") {
            hello(names[i]);
        } else {
            goodBye(names[i]);
        }
    }

})(); 