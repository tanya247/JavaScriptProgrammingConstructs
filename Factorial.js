function Factorial(num){
    fact = 1;
    for(i=1;i<=num;i++){
        fact = fact * i;
    }
    console.log("factorial of " + num +" is: "+fact);
}
Factorial(5)