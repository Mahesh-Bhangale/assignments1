let printCapitalNames = function(...names: string[]){
    for(let i in names){
        console.log(names[i].toUpperCase());
    }
}

var names = ["pranav", "arun", "mohan", "abc", "xyz"];
printCapitalNames(...names);

