function unitConversion(choice, value){
    
    switch(choice){
        case 1: console.log("Feet to Inch- "+value+": "+value*12);
        break;
        case 2: console.log("Feet to Meter- " + value + ": "+value*3.048);
        break;
        case 3: console.log("Inch to Feet- "+ value + ": "+value/12);
        break;
        case 4: console.log("Meter to Feet- "+value+": "+value*3.28);
        break
        default: console.log("Invalid");
    }

}
unitConversion(2,15)