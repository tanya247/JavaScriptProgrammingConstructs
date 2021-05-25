function WeekDay(digit){
    if(digit == 1){
        console.log(digit+" : Sunday");
    }else if(digit == 2){
        console.log(digit+" : Monday");
    }else if(digit == 3){
        console.log(digit+" : Tuesday");
    }else if(digit == 4){
        console.log(digit+" : Wednesday");
    }else if(digit == 5){
        console.log(digit+" : Thursday");
    }else if(digit == 6){
        console.log(digit+" : Friday");
    }else if(digit == 7){
        console.log(digit+" : Saturday");
    }else{
        console.log("Invalid");
    }
}
WeekDay(6);