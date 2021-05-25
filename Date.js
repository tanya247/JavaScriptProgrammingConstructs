function takeMonthandDate(date){
    if ((date>= new Date("March 20"))&& (date<=new Date("June 20"))){
        console.log("true");
    }else{
        console.log("false");
    }
}
takeMonthandDate(new Date("May 24"));