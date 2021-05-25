num1 = Math.floor(Math.random () *1000 );
let max = num1;
let min = num1;
for (let i = 0; i < 4; i++) {
    let num =Math.floor(Math.random () *1000 );
    console.log(num);
    if(num>max )
    {
        max = num;
    }else if(num<min)
    {
        min = num;
    }
    
}
console.log("maximum between 5 no. is: "+max);
console.log("minimum between 5 no. is: "+min);