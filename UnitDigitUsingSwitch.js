function UnitDigitUsingSwitch(num){
    switch(num){
        case 1: console.log("Ones");
        break;
        case 10: console.log("Ten");
        break;
        case 100: console.log("Hundered");
        break;
        case 1000: console.log("Thousand");
        break;
        case 10000: console.log("Ten Thousand");
        break;
        default: console.log("Invalid");
        
    }    
}
UnitDigitUsingSwitch(100);