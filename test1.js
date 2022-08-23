function logSpace() {
    var localVar = 2;

    if(localVar){
        //to avoid confusion and killing localVar value.
        //we use let prefix for the next variable
        let localVar = "I'm different!";
        console.log("logSpace localVar: ", localVar);
    }
    console.log(localVar);
}

logSpace();
