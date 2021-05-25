function WeekDayUsingSwitch(digit){
    switch(digit){
        case 1: console.log(digit+" : Sunday");
        break;
        case 2: console.log(digit+" : Monday");
        break;
        case 3: console.log(digit+" : Tuesday");
        break;
        case 4: console.log(digit+" : Wednesday");
        break;
        case 5: console.log(digit+" : Thursday");
        break;
        case 6: console.log(digit+" : Friday");
        break;
        case 7: console.log(digit+" : Saturday");
        break;
        default: console.log("Invalid");
    }
}
WeekDayUsingSwitch(5);